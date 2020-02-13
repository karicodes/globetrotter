import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';
import styled from 'styled-components'
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <h1>Globe Trotter!</h1>
      <Map />
      <Footer /> 
    </div>
    
  )
}



ReactDOM.render(<App />, document.getElementById('root'));