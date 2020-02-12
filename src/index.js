import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map/index';
import Header from './components/Header/Header';
import styled from "styled-components";

function App() {
  return (
    <div>
      <Header />
      <Map />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));