import React, { PureComponent } from 'react';
import { Container } from './Map.styles';
import { Button } from 'semantic-ui-react'


export default class CityInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.country.name}, ${info.country.region}`;

    return (
      <div>
        <Container>
          <span>
            {displayName}
          </span>
          <img src={info.country.flag} width={20} alt='flag' />
        </Container>
        <p>{info.notes}</p>

        <img width={240} src={info.image} />
        <Button icon='edit' />
        <Button icon='delete' />
      </div>
    );
  }
}