import React from 'react';
import './App.css';
import Finder from './features/Finder/Finder';
import Header from './ui-components/Header/Header';
import { Grid, Container } from '@material-ui/core';

function App() {
  return (
    <Grid>
      <Header />
      <Container>
        <Finder />
      </Container>
    </Grid>
  );
}

export default App;
