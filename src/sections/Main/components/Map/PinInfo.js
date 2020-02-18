import React, {PureComponent} from 'react';
import { Container } from './Map.styles';

export default class CityInfo extends PureComponent {
  render() {
    const {info} = this.props;
    const displayName = `${info.name}, ${info.region}`;

    return (
      <div>
        <Container>
          <span>
          {displayName}
          </span>
          <img src={info.flag} width={20} alt='flag' />
        </Container>
        <img width={240} src={info.image} />
      </div>
    );
  }
}