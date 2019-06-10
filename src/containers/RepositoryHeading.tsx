import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../Store';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import moment from 'moment';
import { IRepository } from '../domain/interfaces';
import { getAllRepositories, clearAllRepositories } from '../domain/actions/RepositoryActions';
import { ChangeEvent } from 'react';
import { debounce } from 'lodash';
import LinearProgress from '@material-ui/core/LinearProgress';

interface IProps {
    searchString: string;
    searchAction: (searchString: string) => void;
    clearAction: () => void;
    createdSince?: moment.Moment;
    searching?: boolean;
}

class RepositorySearch extends React.Component<IProps> {
    
    debouncedSearchOnChange = debounce(languageString => {
        if (this.props.searchAction) {
            this.props.searchAction(languageString);
        }
    }, 500);

    searchOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.clearAction();
        this.debouncedSearchOnChange((() => event.currentTarget.value)());
    }

    public render() {
        const { searchString, createdSince, searching } = this.props;
        return (
            <AppBar position="static" color="default" className="c-repositoryHeading">
                <Toolbar>
                    <Container maxWidth='md'>
                        <header>
                            <Typography variant="h4" component="h1" gutterBottom>Most Stars: '{searchString}'</Typography>
                            <TextField label="Currently Displaying" defaultValue={this.props.searchString} onChange={this.searchOnChange} className="c-repositoryHeading-searchText" />
                            {!searching && createdSince && (<Typography variant="caption" component="p" gutterBottom>Repositories created since {createdSince.format('Do MMMM YYYY')}</Typography>)}
                        </header>
                    </Container>
                </Toolbar>
                {searching && (<LinearProgress />)}
            </AppBar>
        );
    }
}

const mapStateToProps = (store: IAppState) => {
    let searchString = '';
    let repositories: IRepository[] = [];
    let createdSince;
    if (store.repositoriesState) {
        if (store.repositoriesState.searchString) {
            searchString = store.repositoriesState.searchString;
        }
        if (store.repositoriesState.items) {
            repositories = store.repositoriesState.items;
        }
        if (store.repositoriesState.createdSince) {
            createdSince = store.repositoriesState.createdSince;
        }
    }
    return {
        searchString,
        repositories,
        createdSince,
        searching: store.repositoriesState.searching
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        searchAction: (language: string) => dispatch(getAllRepositories(language)),
        clearAction: () => dispatch(clearAllRepositories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositorySearch);