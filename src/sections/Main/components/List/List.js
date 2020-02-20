import React, { useContext } from 'react'
import { Menu } from 'semantic-ui-react';
import { Container, LeftList, RightList } from './List.styles';
import { MapContext } from '../../Contexts/MapContext';

function List() {
  const mapContext = useContext(MapContext);

  const [visitedCountries] = mapContext.visited;
  const [bucketlistCountries] = mapContext.bucketlist;

  return (
    <Container>
      <LeftList>
        <Menu fluid vertical>
          <Menu.Item className='header'>Where I've Been</Menu.Item>
          {visitedCountries.map(country => (
            <Menu.Item key={country.country.name}>
              {country.country.name}
            </Menu.Item>
          ))}
        </Menu>
      </LeftList>
      <RightList>
        <Menu fluid vertical>
          <Menu.Item className='header'>Where I Want To Go</Menu.Item>
          {bucketlistCountries.map(country => (
            <Menu.Item key={country.country.name}>
              {country.country.name}
            </Menu.Item>
          ))}
        </Menu>
      </RightList>
    </Container>
  )
}

export default List;