import { Reducer } from 'redux';
import moment from 'moment';
import {
  RepositoryActions,
  RepositoryActionTypes
} from '../actions/actionTypes';
import {
  IRepositoriesState
} from '../interfaces';

const initialState: IRepositoriesState = {
  items: [],
  searching: false
};

export const repositoryReducer: Reducer<IRepositoriesState, RepositoryActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case RepositoryActionTypes.GET_ALL: {
      return {
        ...state,
        items: action.repositories,
        searchString: action.searchString,
        createdSince: action.createdSince,
        searching: false
      };
    }
    case RepositoryActionTypes.CLEAR_ALL: {
      return {
        ...state,
        items: [],
        searching: true
      };
    }
    default:
      return state;
  }
};