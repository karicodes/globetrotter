import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'



const AddDestination = (props) => (
  <Modal trigger={props.triggerButton}>
    <Modal.Header>Add a Destnation</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Add a Destination</Header>
        <p>
          This is a modal.
        </p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default AddDestination;