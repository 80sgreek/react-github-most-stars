import { repositoryReducer } from '../RepositoryReducer';
import { RepositoryActionTypes, IRepositoryGetAllAction } from '../../types';

describe('RepositoryReducer', () => {

    it('returns the initial state', () => {

        //ARRANGE
        const action:IRepositoryGetAllAction = { type:RepositoryActionTypes.GET_ALL, repositories: [] };
        const initialState = { repositories: [] };

        //ACT
        const returnedState = repositoryReducer(undefined, action);

        //ASSERT
        expect(returnedState).toEqual(initialState);

    });

    it('returns the correct updated state from initial', () => {

        //ARRANGE
        const action:IRepositoryGetAllAction = { type:RepositoryActionTypes.GET_ALL, repositories: [{ id: 123, name: 'test1name' }] };
        const expectedState = { repositories: [{ id: 123, name: 'test1name' }] };

        //ACT
        const returnedState = repositoryReducer(undefined, action);

        //ASSERT
        expect(returnedState).toEqual(expectedState);

    });

});