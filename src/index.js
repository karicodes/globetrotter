import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';
import Header from './components/Header/Header';

function App() {
  return (
      <Header/>
      <Map/>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));