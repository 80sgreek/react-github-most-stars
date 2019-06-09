import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import {
  IRepository,
  IRepositoryState
} from '../reducers/RepositoryReducer';

const getMostStarredGithubRepoUrl = (numberOfResults:number):string => {
  return `https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=${numberOfResults}`;
}

export enum RepositoryActionTypes {
  GET_ALL = 'GET_ALL',
}

export interface IRepositoryGetAllAction {
  type: RepositoryActionTypes.GET_ALL;
  repositories: IRepository[];
}

export type RepositoryActions = IRepositoryGetAllAction;

export const getAllRepositories: ActionCreator<
  ThunkAction<Promise<any>, IRepositoryState, null, IRepositoryGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(getMostStarredGithubRepoUrl(3));
      let repositories:IRepository[] = [];
      if(response.data, response.data.items) {
        repositories = response.data.items;
      }
      dispatch({
        repositories,
        type: RepositoryActionTypes.GET_ALL
      });
    } catch (err) {
      console.error(err);
    }
  };
};