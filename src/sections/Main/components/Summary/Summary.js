import React from 'react';
import { Container } from './Summary.styles';
import { List } from 'semantic-ui-react';


export default function Summary() {
  return (
    <Container>
      <h1>Summary</h1>
      <List divided relaxed>
        <List.Item>
          <List.Icon name='globe' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Description as='p'>You have been to X countries out of 197</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='globe' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Description as='p'>You have been to X continents out of 5</List.Description>
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