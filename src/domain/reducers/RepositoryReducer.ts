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
  items: []
};

export const repositoryReducer: Reducer<IRepositoriesState, RepositoryActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case RepositoryActionTypes.GET_ALL: {
      return {
        ...state,
        searchString: action.searchString,
        items: action.repositories,
        updatedAt: moment()
      };
    }
    default:
      return state;
  }
};