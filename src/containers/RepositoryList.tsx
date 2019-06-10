import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../Store';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { IRepository } from '../domain/interfaces';
import RepositoryCard from '../components/RepositoryCard';

interface IProps {
    repositories: IRepository[];
}

class RepositoryList extends React.Component<IProps> {
    public render() {
        const { repositories } = this.props;
        return (
            <List>
                {repositories &&
                    repositories.map(repository => {
                        return (
                            <ListItem disableGutters>
                                <RepositoryCard key={repository.id} {...repository} />
                            </ListItem>
                        );
                    })}
            </List>
        );
    }
}

const mapStateToProps = (store: IAppState) => {
    let repositories:IRepository[] = [];
    if(store.repositoriesState && store.repositoriesState.items) {
        repositories = store.repositoriesState.items
    }
    return { repositories };
};

export default connect(mapStateToProps)(RepositoryList);