import React from 'react';
import { Container, Button } from './ToggleButtons.styles';

function ToggleButtons(props) {
  return (
    <Container>
      <Button>+</Button>
      <Button onClick={() => props.setView('map')}>Map View</Button>
      <Button onClick={() => props.setView('list')}>List View</Button>
      <Button onClick={() => props.setView('summary')}>Stats Summary</Button>
    </Container>
  )
}

export default ToggleButtons;