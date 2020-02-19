import React, { useContext } from 'react';
import { Container } from './Summary.styles';
import { List } from 'semantic-ui-react';
import { MapContext } from '../../Contexts/MapContext';
import { CountryContext } from '../../Contexts/CountryContext';


export default function Summary() {
  const mapContext = useContext(MapContext);
  const [countries] = useContext(CountryContext);


  const [visitedCountries] = mapContext.visited;

  return (
    <Container>
      <h1>Summary</h1>
      <List divided relaxed>
        <List.Item>
          <List.Icon name='globe' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Description as='p'>You have been to <span>{visitedCountries.length}</span> countries out of <span>{countries.length}</span> </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='globe' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Description as='p'>You have been to <span>{console.log(visitedCountries.map(country => country.region))}</span> continents out of 5</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='globe' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Description as='p'>You have been exposed to X languages out of 6500</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='globe' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Description as='p'>You have used X currencies out of 180</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='globe' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Description as='p'>You have been in X time zones out of 24</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Container>
  )
}