import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const description = 'Our everyday actions consume energy and produce carbon emissions, \
such as driving, flying and heating buildings. Carbon offsetting is used to compensate for \
your emissions by funding an equivalent carbon dioxide saving elsewhere.'

const CardExampleExtraContent = () => (
  <Card style={{marginTop: 35}}>
    <Card.Content header='Would you like to offset your Carbon Footprint?' />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='linkify' />
      <a href="https://www.carbonfootprint.com/offsetshop.html">Click Here!</a>
    </Card.Content>
  </Card>
)

export default CardExampleExtraContent