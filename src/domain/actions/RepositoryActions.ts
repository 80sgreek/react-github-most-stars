import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import {
  IRepository,
  IRepositoriesState 
} from '../interfaces';
import {
  RepositoryActionTypes,
  IRepositoryGetAllAction
} from './actionTypes';

const getMostStarredGithubRepoUrl = (numberOfResults:number):string => `https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=${numberOfResults}`;

export const getAllRepositories: ActionCreator<
  ThunkAction<Promise<any>, IRepositoriesState, null, IRepositoryGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(getMostStarredGithubRepoUrl(3));
      let repositories:IRepository[] = [];
      if(response.data && response.data.items) {
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