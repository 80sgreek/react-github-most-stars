import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../Store';
import moment from 'moment';
import { IRepository } from '../domain/interfaces';

interface IProps {
    repositories: IRepository[];
    repositoriesUpdated?: moment.Moment;
}

class RepositorySearch extends React.Component<IProps> {
    public render() {
        const { repositoriesUpdated } = this.props;
        return (
            <header>
                <h1>Most Stars: 'javascript'</h1>
                {repositoriesUpdated && (
                    <p>Repos created since {repositoriesUpdated.format('Do MMMM YYYY')}</p>
                )}
            </header>
        );
    }
}

const mapStateToProps = (store: IAppState) => {
    let repositories:IRepository[] = [];
    if(store.repositoryState && store.repositoryState.repositories) {
        repositories = store.repositoryState.repositories
    }
    return { 
        repositories,
        repositoriesUpdated: store.repositoryState.repositoriesUpdated 
    };
};

export default connect(mapStateToProps)(RepositorySearch);