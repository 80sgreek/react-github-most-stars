import { IRepository } from '../interfaces';
import moment from 'moment';

/**
 * Irepository get all action
 */
export interface IRepositoryGetAllAction {
    createdSince: moment.Moment;
    type: RepositoryActionTypes.GET_ALL;
    searchString: string;
    repositories: IRepository[];
}

/**
 * Irepository clear all action
 */
export interface IRepositoryClearAllAction {
    type: RepositoryActionTypes.CLEAR_ALL;
}

/**
 * Repository action types
 */
export enum RepositoryActionTypes {
    GET_ALL = 'GET_ALL',
    CLEAR_ALL = 'CLEAR_ALL',
}

export type RepositoryActions = IRepositoryGetAllAction | IRepositoryClearAllAction;