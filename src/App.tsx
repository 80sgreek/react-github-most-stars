import React from 'react';

import './App.css';

import RepositorySearch from './containers/RepositorySeach';
import RepositoryList from './containers/RepositoryList';

const App: React.FC<{}> = () => {
  return (
    <div>
      <RepositorySearch />
      <RepositoryList />
    </div>
  );
};

export default App;