import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';

import RepositorySearch from './containers/RepositorySeach';
import RepositoryList from './containers/RepositoryList';

const App: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <RepositorySearch />
      <Container maxWidth='md'>
        <RepositoryList />
      </Container>
    </React.Fragment>
  );
};

export default App;