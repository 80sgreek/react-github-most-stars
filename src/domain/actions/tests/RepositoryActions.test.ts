import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from 'moxios';

import { getAllRepositories } from '../RepositoryActions';
import { RepositoryActionTypes } from '../actionTypes';

import mockRepositoriesResponse from './mockRepositoriesResponse.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("getAllRepositories", () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it("does nothing when receiving an unexpected JSON response", async () => {
    //ARRANGE
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {},
      });
    });

    const expectedActions = [
      { searchString: '', type: RepositoryActionTypes.GET_ALL, repositories: [] },
    ];

    const store = mockStore();

    //ACT
    await store.dispatch<any>(getAllRepositories('', 0));
    const actions = store.getActions();

    //ASSERT
    expect(actions[0].searchString).toEqual(expectedActions[0].searchString);
    expect(actions[0].repositories).toEqual(expectedActions[0].repositories);
  });

  it("correctly processes the a valid JSON response with no items", async () => {
    //ARRANGE
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { items: [] },
      });
    });

    const expectedActions = [
      { searchString: '', type: RepositoryActionTypes.GET_ALL, repositories: [] },
    ];

    const store = mockStore();

    //ACT
    await store.dispatch<any>(getAllRepositories('', 0));
    const actions = store.getActions();

    //ASSERT
    expect(actions[0].searchString).toEqual(expectedActions[0].searchString);
    expect(actions[0].repositories).toEqual(expectedActions[0].repositories);
  });

  it("correctly processes the a valid JSON response with valid items", async () => {
    //ARRANGE
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockRepositoriesResponse,
      });
    });

    const expectedActions = [
      { searchString: '', type: RepositoryActionTypes.GET_ALL, repositories: mockRepositoriesResponse.items },
    ];

    const store = mockStore();

    ///ACT
    await store.dispatch<any>(getAllRepositories('', 0));
    const actions = store.getActions();

    //ASSERT
    expect(actions[0].searchString).toEqual(expectedActions[0].searchString);
    expect(actions[0].repositories).toEqual(expectedActions[0].repositories);
  });

});