import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import App from './App';

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
    const storeState = { repositoryState: {} };
    const store = mockStore(storeState);

    //ACT && ASSERT 
    expect(() => {
      ReactDOM.render(<Provider store={store}>
        <App />
      </Provider>, div);
    }).not.toThrow();

  });

  it('renders without crashing if using an updated state', () => {

    //ARRANGE
    const storeState = { repositoryState: {} };
    const store = mockStore(storeState);

    //ACT && ASSERT 
    expect(() => {
      ReactDOM.render(<Provider store={store}>
        <App />
      </Provider>, div);
    }).not.toThrow();

  });

});