import React from 'react';
import { Container, Title, BulletPoints } from './Summary.styles';

export default function Summary() {
  return (
    <Container>
      <Title>Summary</Title>
      <BulletPoints>
        <ul>
          <li>You have been to X countries out of 197</li>
          <li>You have been to X continents out of 5</li>
          <li>You have been exposed to X languages out of 6500</li>
          <li>You have used X currencies out of 180</li>
          <li>You have been in X time zones out of 24</li>
        </ul>
      </BulletPoints>
    </Container>
  )
}