import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import ToggleButtons from './components/ToggleButtons';
import { Container } from './Main.styles';

function Main() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(json => {
        setItems(json);
        setIsLoaded(true);
      })
  }, [])

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <ToggleButtons />
      <Map />
      {/* <select>
        {items.map(item => (
          <option key={item.id}>
            {item.name}
          </option>
        ))}
      </select> */}
    </Container>
  );
}

export default Main;