import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store
} from 'redux';
import thunk from 'redux-thunk';
import {
    RepositoryReducer,
    IRepositoryState,
} from './reducers/RepositoryReducer';

export interface IAppState {
    repositoryState: IRepositoryState;
}

const rootReducer = combineReducers<IAppState>({
    repositoryState: RepositoryReducer,
});

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}