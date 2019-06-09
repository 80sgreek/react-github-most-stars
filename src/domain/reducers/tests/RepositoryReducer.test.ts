import { repositoryReducer } from '../RepositoryReducer';
import { RepositoryActionTypes, IRepositoryGetAllAction } from '../../actions/actionTypes';
describe('RepositoryReducer', () => {

    it('returns the initial repositories state', () => {

        //ARRANGE
        const action:IRepositoryGetAllAction = { type:RepositoryActionTypes.GET_ALL, repositories: [] };
        const initialState = { repositories: [] };

        //ACT
        const returnedState = repositoryReducer(undefined, action);

        //ASSERT
        expect(returnedState.repositories).toEqual(initialState.repositories);

    });

    it('returns the correct updated repositories state from initial', () => {

        //ARRANGE
        const testRepositories = [{ 
            id: 123, 
            full_name: 'test1name', 
            created_at: new Date('December 17, 1995 03:24:00'), 
            description: 'test1description', 
            html_url: 'test1url', 
            stargazers_count: 456 
        }];
        const action:IRepositoryGetAllAction = { type:RepositoryActionTypes.GET_ALL, repositories: testRepositories };
        const expectedState = { repositories: testRepositories };

        //ACT
        const returnedState = repositoryReducer(undefined, action);

        //ASSERT
        expect(returnedState.repositories).toEqual(expectedState.repositories);

    });

});