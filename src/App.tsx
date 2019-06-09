import React from 'react';
import './App.css';

import RepositoryList from './containers/RepositoryList';

const App: React.SFC<{}> = () => {
  return (
    <div>
      <h1>Most Stars: 'javascript'</h1>
      <p>Repos created since XXX</p>
      <RepositoryList />
    </div>
  );
};

export default App;