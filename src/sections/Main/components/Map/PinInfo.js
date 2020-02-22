import React, { useState } from 'react';
import { Container } from './Map.styles';
import { Button } from 'semantic-ui-react';

function PinInfo({ info, visitedCountries, setVisitedCountries, bucketlistCountries, setBucketlistCountries, setPopUpInfo }) {
  const { country, notes, image } = info;
  const [isEditOn, setIsEditOn] = useState(false);
  const [notesValue, setNotesValue] = useState(notes)
  const displayName = `${country.name}, ${country.region}`;

  function handleEdit() {
    setIsEditOn(true)
  }

  function handleUpdate() {

    if (visitedCountries.some(c => c.country.name === country.name)) {
      const updatedVList = visitedCountries.map(c => {
        if (c.name === country.name) {
          return { ...c, notes: setNotesValue }
        }
        return c
      })
      setVisitedCountries(updatedVList)
    } else if (bucketlistCountries.some(c => c.country.name === country.name)) {
      const updatedBList = bucketlistCountries.map(c => {
        if (c.name === country.name) {
          return { ...c, notes: setNotesValue }
        }
        return c
      })
      setBucketlistCountries(updatedBList)
    }

    setIsEditOn(false)
  }

  function handleUpdateNotes(e) {
    setNotesValue(e.target.value)
  }

  function handleDelete() {
    if (visitedCountries.some(c => c.country.name === country.name)) {
      const updatedList = visitedCountries.filter(c => c.country.name !== country.name)
      setVisitedCountries(updatedList);
    } else {
      const updatedList = bucketlistCountries.filter(c => c.country.name !== country.name)
      setBucketlistCountries(updatedList);
    }
    setPopUpInfo(null)
  }

  return (
    <>
      <Container>
        <span>
          {displayName}
        </span>
        <img src={country.flag} width={20} alt='flag' />
      </Container>
      {
        isEditOn
          ? <input type='text' value={notesValue} onChange={handleUpdateNotes} />
          : <p>{notesValue}</p>
      }

      <img width={240} src={image} />
      {
        isEditOn
          ? <Button icon='arrow right' onClick={handleUpdate} />
          : <Button icon='edit' onClick={handleEdit} />
      }
      <Button icon='trash' onClick={handleDelete} />
    </>
  );
}

export default PinInfo;