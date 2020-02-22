import React from 'react';
import Main from './sections/Main';
import { Container } from './App.styles';
import Header from './sections/Header/Header';
import Footer from './sections/Footer/footer';

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}

export default App;