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
      { type: RepositoryActionTypes.GET_ALL, repositories: [] },
    ];

    const store = mockStore();

    //ACT
    await store.dispatch<any>(getAllRepositories());

    //ASSERT
    expect(store.getActions()).toEqual(expectedActions);
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
      { type: RepositoryActionTypes.GET_ALL, repositories: [] },
    ];

    const store = mockStore();

    //ACT
    await store.dispatch<any>(getAllRepositories());

    //ASSERT
    expect(store.getActions()).toEqual(expectedActions);
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
      { type: RepositoryActionTypes.GET_ALL, repositories: mockRepositoriesResponse.items },
    ];

    const store = mockStore();

    //ACT
    await store.dispatch<any>(getAllRepositories());

    //ASSERT
    expect(store.getActions()).toEqual(expectedActions);
  });

});