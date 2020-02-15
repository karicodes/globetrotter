import React from 'react'
import { Button, Header, Modal, Form, Input, Icon } from 'semantic-ui-react'

const AddDestination = (props) => (
  <Modal trigger={props.triggerButton}>
    <Modal.Header>Add a Destnation</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Add a Destination</Header>
        <Form>
          <Form.Group widths='equal'>
            <div>
              <Input list='countries' placeholder='Choose Country...' />
              <datalist id='countries'>
                <option value='Agentina' />
                <option value='Andorra' />
                <option value='Australia' />
              </datalist>
            </div>
          </Form.Group>
          <Form.Group grouped>
            <Form.Field
              label='I Have Been Here'
              control='input'
              type='radio'
              name='htmlRadios'
            />
            <Form.Field
              label='I Want To Go Here'
              control='input'
              type='radio'
              name='htmlRadios'
            />
          </Form.Group>
          <Form.Group grouped>
            <Form.Field label='Add a Fun Fact' control='input' type='checkbox' />
          </Form.Group>
          <Form.Field label='Add Notes' control='textarea' rows='3' />
          <Form.Field>
          <Button animated>
              <Button.Content visible>Add a Photo</Button.Content>
              <Button.Content hidden>
                <Icon name='photo' />
              </Button.Content>
            </Button>          </Form.Field>
          <Form.Field>
            <Button animated>
              <Button.Content visible>Submit</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Form.Field>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default AddDestination;