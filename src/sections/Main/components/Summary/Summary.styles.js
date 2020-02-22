import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  color: white;
  font-size: 20px;
  padding: 40px;

  p {
    color: white !important;
  }
  `

export const Title = styled.h1`
  grid-area: 1 / 1 / 2 / 5;
  font-size: 40px;
`

export const Body = styled.div`
  grid-area: 2 / 1 / 5 / 4; 
`

export const Message = styled.div`
  grid-area: 2 / 4 / 5 / 5;
  font-size: 10px;
`