import { Reducer } from 'redux';
import moment from 'moment';
import {
  RepositoryActions,
  RepositoryActionTypes
} from '../actions/actionTypes';
import {
  IRepositoryState
} from '../interfaces';

const initialState: IRepositoryState = {
  repositories: []
};

export const repositoryReducer: Reducer<IRepositoryState, RepositoryActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case RepositoryActionTypes.GET_ALL: {
      return {
        ...state,
        repositories: action.repositories,
        repositoriesUpdated: moment()
      };
    }
    default:
      return state;
  }
};