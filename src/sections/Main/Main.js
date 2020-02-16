import React, { useState } from 'react';
import Map from './components/Map';
import List from './components/List';
import Summary from './components/Summary';
import ToggleButtons from './components/ToggleButtons';
import { Container, Content } from './Main.styles';
import { CountryProvider } from './Contexts/CountryContext';
import { MapProvider } from './Contexts/MapContext';

function Main() {

  const [view, setView] = useState('map');

  return (
    <CountryProvider>
      <MapProvider>
        <Container>
          <ToggleButtons view={view} setView={setView} />
          <Content>
            {view === 'map' && <Map />}
            {view === 'list' && <List />}
            {view === 'summary' && <Summary />}
          </Content>
        </Container>
      </MapProvider>
    </CountryProvider>

  );
}

export default Main;