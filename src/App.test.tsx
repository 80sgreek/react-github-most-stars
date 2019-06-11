import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk, { ThunkAction } from "redux-thunk";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import App from './App';
import { getAllRepositories } from './domain/actions/RepositoryActions';
import { AnyAction } from 'redux';

describe('Root App', () => {

  let div: Element;

  beforeEach(function () {
    div = document.createElement('div');
  });

  afterEach(function () {
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing if using the initial state', () => {

    //ARRANGE
    const initialSearchString = 'Javascript';
    const store = mockStore({ repositoriesState: { searchString:initialSearchString, searching: false }});

    //ACT && ASSERT 
    expect(() => {
      ReactDOM.render(<Provider store={store}>
        <App />
      </Provider>, div);
    }).not.toThrow();

  });

});