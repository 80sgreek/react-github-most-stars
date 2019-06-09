import { Reducer } from 'redux';
import {
  RepositoryActions,
  RepositoryActionTypes,
  IRepositoryState
} from '../types';

const initialCharacterState: IRepositoryState = {
  repositories: [],
};

export const repositoryReducer: Reducer<IRepositoryState, RepositoryActions> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case RepositoryActionTypes.GET_ALL: {
      return {
        ...state,
        repositories: action.repositories,
      };
    }
    default:
      return state;
  }
};