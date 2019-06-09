import { Reducer } from 'redux';
import {
  RepositoryActions,
  RepositoryActionTypes,
} from '../actions/RepositoryActions';

export interface IRepository {
  id: number;
  name: string;
}

export interface IRepositoryState {
  readonly repositories: IRepository[];
}

const initialCharacterState: IRepositoryState = {
  repositories: [],
};

export const RepositoryReducer: Reducer<IRepositoryState, RepositoryActions> = (
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