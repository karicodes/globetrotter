import React from 'react';
import Main from './sections/Main';
import { Container, Title } from './App.styles';
import Header from './sections/Header/Header';

function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  )
}

export default App;