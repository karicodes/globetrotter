import React from 'react';
import { Container } from './ToggleButtons.styles';
import { Button } from 'semantic-ui-react';
import AddDestination from '../Modals';


export function buttonStyles (bool) {
  return {
    backgroundColor: bool ? 'whitesmoke' : 'silver',
    width: '100px',
    height: '100px',
    fontSize: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContents: 'center'
  }
}

function ToggleButtons(props) {
  return (
    <Container>
      <AddDestination triggerButton={<Button style={buttonStyles()} icon='add' />} />
      <Button style={buttonStyles(props.view === 'map')} icon='map' onClick={() => props.setView('map')} />
      <Button style={buttonStyles(props.view === 'list')} icon='table' onClick={() => props.setView('list')} />
      <Button style={buttonStyles(props.view === 'summary')} icon='unordered list' onClick={() => props.setView('summary')} />
    </Container>
  )
}

export default ToggleButtons;