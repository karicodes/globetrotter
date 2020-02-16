import React from 'react'
import { Menu } from 'semantic-ui-react';
import { Container, LeftList, RightList } from './List.styles';

const List = () => (
  <Container>
    <LeftList>
      <Menu fluid vertical>
        <Menu.Item className='header'>Where I've Been</Menu.Item>
        <Menu.Item>Thailand</Menu.Item>
        <Menu.Item>Singapore</Menu.Item>
      </Menu>
    </LeftList>
    <RightList>
      <Menu fluid vertical>
        <Menu.Item className='header'>Where I Want To Go</Menu.Item>
        <Menu.Item>Brazil</Menu.Item>
        <Menu.Item>New Zealand</Menu.Item>
      </Menu>
    </RightList>
  </Container>
)

export default List;