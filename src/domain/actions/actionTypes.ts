import { IRepository } from '../interfaces';

export interface IRepositoryGetAllAction {
    type: RepositoryActionTypes.GET_ALL;
    searchString: string;
    repositories: IRepository[];
}

export enum RepositoryActionTypes {
    GET_ALL = 'GET_ALL',
}

export type RepositoryActions = IRepositoryGetAllAction;