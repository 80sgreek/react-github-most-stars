import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store
} from 'redux';
import thunk from 'redux-thunk';
import { repositoryReducer } from './domain/reducers/RepositoryReducer';
import { IRepositoryState } from './domain/types';

export interface IAppState {
    repositoryState: IRepositoryState;
}

const rootReducer = combineReducers<IAppState>({
    repositoryState: repositoryReducer,
});

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}