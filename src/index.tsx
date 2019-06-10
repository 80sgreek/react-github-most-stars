import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Store } from 'redux';
import configureStore, { IAppState } from './Store';
import { getAllRepositories } from './domain/actions/RepositoryActions';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

interface IProps {
  store: Store<IAppState>;
}

const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

const initialSearchString = 'Javascript';
const store = configureStore({ repositoriesState: { searchString:initialSearchString, searching: false }});
store.dispatch(getAllRepositories(initialSearchString, 3));

ReactDOM.render(<Root store={store} />, document.getElementById('root') as HTMLElement);

serviceWorker.unregister();
