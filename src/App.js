import React, { Fragment } from 'react';
import Main from './sections/Main';
import { Container, Title } from './App.styles';
import Footer from './sections/Footer/footer';

function App() {
  return (
    <Container>
      <Title>GlobeTrotter</Title>
      <Main />
      <Footer />
    </Container>
  )
}

export default App;