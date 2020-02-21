import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  padding-top: 10px;
`

export const LeftList = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`

export const RightList = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`