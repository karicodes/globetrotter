import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
background-color: whitesmoke;
border: none;
color: black;
padding: 10px 10px;
text-align: center;
text-decoration: none;
font-size: 16px;
height: 90px;
width: 90px;
border-radius: 12px;
margin: 20px;
cursor: pointer;

:hover {
  background: grey;
  color: white;
}
`