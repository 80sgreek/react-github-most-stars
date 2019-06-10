import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../Store';
import moment from 'moment';
import { IRepository } from '../domain/interfaces';

import { getAllRepositories } from '../domain/actions/RepositoryActions';
import { ChangeEvent } from 'react';

interface IProps {
    searchString: string;
    searchAction?: (searchString:string) => void;
    repositories?: IRepository[];
    repositoriesUpdated?: moment.Moment;
}

class RepositorySearch extends React.Component<IProps> {

    searchOnChange = (event:ChangeEvent<HTMLInputElement>) => {
        if(this.props.searchAction) {
            this.props.searchAction(event.currentTarget.value);
        }
    }

    public render() {
        const { searchString, repositoriesUpdated } = this.props;
        return (
            <header>
                <h1>Most Stars: '{searchString}'</h1>
                <input value={searchString} onChange={this.searchOnChange} />
                {repositoriesUpdated && (
                    <p>Repos created since {repositoriesUpdated.format('Do MMMM YYYY')}</p>
                )}
            </header>
        );
    }
}

const mapStateToProps = (store: IAppState) => {
    let searchString = '';
    let repositories:IRepository[] = [];
    let updatedAt;
    if(store.repositoriesState) {
        if(store.repositoriesState.searchString) {
            searchString = store.repositoriesState.searchString;
        }
        if(store.repositoriesState.items) {
            repositories = store.repositoriesState.items;
        }
        if(store.repositoriesState.updatedAt){
            updatedAt = store.repositoriesState.updatedAt;
        }
    }
    return { 
        searchString,
        repositories,
        updatedAt
    };
};

const mapDispatchToProps = (dispatch:any) => {
    return {
      searchAction: (language:string) => dispatch(getAllRepositories(language))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(RepositorySearch);