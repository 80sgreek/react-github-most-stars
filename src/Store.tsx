import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store
} from 'redux';
import thunk from 'redux-thunk';
import { repositoryReducer } from './domain/reducers/RepositoryReducer';
import { IRepositoriesState } from './domain/interfaces';

export interface IAppState {
    repositoriesState: IRepositoriesState;
}

const rootReducer = combineReducers<IAppState>({
    repositoriesState: repositoryReducer,
});

export default function configureStore(initialState?:IAppState): Store<IAppState, any> {  
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
}