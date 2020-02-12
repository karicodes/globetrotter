import React from 'react';
import { Container, Button } from './ToggleButtons.styles';

function ToggleButtons() {
  return (
    <Container>
      <Button>+</Button>
      <Button>Map View</Button>
      <Button>List View</Button>
      <Button>Stats Summary</Button>
    </Container>
  )
}

export default ToggleButtons;