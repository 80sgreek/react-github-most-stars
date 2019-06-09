import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../Store';
import { IRepository } from '../domain/types';

interface IProps {
    repositories: IRepository[];
}

class RepositoryList extends React.Component<IProps> {
    public render() {
        const { repositories } = this.props;
        return (
            <ul>
                {repositories &&
                    repositories.map(repository => {
                        return (
                            <li key={repository.id}>
                                {repository.name}
                            </li>
                        );
                    })}
            </ul>
        );
    }
}

const mapStateToProps = (store: IAppState) => {
    return {
        repositories: store.repositoryState.repositories,
    };
};

export default connect(mapStateToProps)(RepositoryList);