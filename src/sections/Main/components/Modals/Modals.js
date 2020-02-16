import React, { useContext, useState } from 'react';
import { Button, Modal, Form, Input, Icon } from 'semantic-ui-react';
import { CountryContext } from '../../Contexts/CountryContext';
import { MapContext } from '../../Contexts/MapContext';

function AddDestination(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [countries, setCountries] = useContext(CountryContext);

  const mapContext = useContext(MapContext);
  const [visitedCountries, setVisitedCountries] = mapContext.visited;
  const [bucketlistCountries, setBucketlistCountries] = mapContext.bucketlist;


  const [country, setCountry] = useState('');
  const [isHaveBeenThere, setIsHaveBeenThere] = useState(true);
  const [photo, setPhoto] = useState(null);
  const [notes, setNotes] = useState('');

  function handleUpdateCountry(e) {
    setCountry(e.target.value)
  }

  function handleUpdateNotes(e) {
    setNotes(e.target.value)
  }

  function handleSubmit() {
    if (isHaveBeenThere) {
      setVisitedCountries(visitedCountries.concat({
        country: country,
        notes: notes
      })
      )
    } else {
      setBucketlistCountries(bucketlistCountries.concat({
        country: country,
        notes: notes
      }))
    }

    setCountry('');
    setIsHaveBeenThere(true);
    setPhoto(null);
    setNotes('');
    setIsModalOpen(false);
  }

  return (
    <Modal onClose={() => setIsModalOpen(false)} open={isModalOpen} trigger={<Button onClick={() => setIsModalOpen(true)} icon='add' />}>
      <Modal.Header>Add a Destination</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Group widths='equal'>
              <div>
                <Input value={country} onChange={handleUpdateCountry} list='countries' placeholder='Choose Country...' />
                <datalist id='countries'>
                  {countries.map(item => (
                    <option key={item.name}>
                      {item.name}
                    </option>
                  ))}
                </datalist>
              </div>
            </Form.Group>
            <Form.Group grouped>
              <Form.Field
                label='I Have Been Here'
                control='input'
                type='radio'
                name='htmlRadios'
                checked={isHaveBeenThere}
                onChange={() => setIsHaveBeenThere(true)}
              />
              <Form.Field
                label='I Want To Go Here'
                control='input'
                type='radio'
                name='htmlRadios'
                checked={!isHaveBeenThere}
                onChange={() => setIsHaveBeenThere(false)}
              />
            </Form.Group>
            <Form.Field>
              <Button animated>
                <Button.Content visible>Add a Photo</Button.Content>
                <Button.Content hidden>
                  <Icon name='photo' />
                </Button.Content>
              </Button>
            </Form.Field>
            <Form.Field value={notes} onChange={handleUpdateNotes} label='Add Notes' control='textarea' rows='3' />
            <Form.Field>
              <Button onClick={handleSubmit} animated>
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
}

export default AddDestination;