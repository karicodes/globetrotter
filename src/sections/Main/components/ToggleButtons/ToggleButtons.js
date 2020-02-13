import React from 'react';
import { Container } from './ToggleButtons.styles';
import { Button } from 'semantic-ui-react'

const buttonStyles = {
  width: '100px',
  height: '100px',
  fontSize: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContents: 'center'
}

function ToggleButtons(props) {
  return (
    <Container>
      <Button style={buttonStyles} icon='add' />
      <Button style={buttonStyles} icon='map' onClick={() => props.setView('map')} />
      <Button style={buttonStyles} icon='table' onClick={() => props.setView('list')} />
      <Button style={buttonStyles} icon='unordered list' onClick={() => props.setView('summary')} />
    </Container>
  )
}

export default ToggleButtons;