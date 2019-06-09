import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { 
  IRepository, 
  IRepositoryState 
} from '../reducers/RepositoryReducer';

export enum RepositoryActionTypes {
  GET_ALL = 'GET_ALL',
}

export interface IRepositoryGetAllAction {
  type: RepositoryActionTypes.GET_ALL;
  repositories: IRepository[];
}

export type RepositoryActions = IRepositoryGetAllAction;

export const getAllRepositories: ActionCreator<
  ThunkAction<Promise<any>, IRepositoryState, null, IRepositoryGetAllAction>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=3');
      dispatch({
        repositories: response.data.items,
        type: RepositoryActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};