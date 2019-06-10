import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './styles/App.scss';
import RepositoryHeading from './containers/RepositoryHeading';
import RepositoryList from './containers/RepositoryList';

const App: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <RepositoryHeading />
      <Container maxWidth='md'>
        <RepositoryList />
      </Container>
    </React.Fragment>
  );
};

export default App;