import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';

function App() {
  return (
    <div>
      <h1>Globe Trotter!</h1>
      <Map />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));