import { IRepository } from '../interfaces';

export interface IRepositoryGetAllAction {
    type: RepositoryActionTypes.GET_ALL;
    searchString: string;
    repositories: IRepository[];
}

export interface IRepositoryClearAllAction {
    type: RepositoryActionTypes.CLEAR_ALL;
}

export enum RepositoryActionTypes {
    GET_ALL = 'GET_ALL',
    CLEAR_ALL = 'CLEAR_ALL',
}

export type RepositoryActions = IRepositoryGetAllAction | IRepositoryClearAllAction;