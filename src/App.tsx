import React from 'react';
import './App.css';

import RepositoryList from './containers/RepositoryList';

const App: React.SFC<{}> = () => {
  return (
    <>
      <h1>Repositories</h1>
      <RepositoryList />
    </>
  );
};

export default App;