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
import moment from 'moment';

const getMostStarredGithubRepoUrl = (language:string, createdSince:string, numberOfResults:number):string => `https://api.github.com/search/repositories?q=language:${language}+created%3A>${createdSince}&type=Repositories&sort=stars&order=desc&per_page=${numberOfResults}`;

export const getAllRepositories: ActionCreator<
  ThunkAction<Promise<any>, IRepositoriesState, null, IRepositoryGetAllAction>
> = (language:string, numberOfResults:number = 3) => {
  return async (dispatch: Dispatch) => {

    let repositories:IRepository[] = [];
    const createdSince = moment().subtract(1, 'months');      

    try {
      const cleanLanguage = language.replace(/[|&;$%@"<>()+,]/g, "");
      try {
        const response = await axios.get(getMostStarredGithubRepoUrl(cleanLanguage, createdSince.format('YYYY-MM-DD'), numberOfResults));
        if(response.data && response.data.items) {
          repositories = response.data.items;
        }
      } catch (err) {
        console.log(err);
      }
      dispatch({
        searchString: cleanLanguage,
        repositories,
        createdSince,
        type: RepositoryActionTypes.GET_ALL
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const clearAllRepositories: ActionCreator<
  ThunkAction<Promise<any>, IRepositoriesState, null, IRepositoryGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: RepositoryActionTypes.CLEAR_ALL
    });
  };
};