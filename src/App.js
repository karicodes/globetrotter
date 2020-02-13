import React from 'react';
import Header from './components/Header';
import Main from './sections/Main';
import { Container } from './App.styles';

function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  )
}

export default App;