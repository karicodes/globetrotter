import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    width: 100%;
    margin: 0;
    min-height: 100%; 
    background-image:  linear-gradient(rgb(32,32,32,0), rgb(32,32,32,0.2), rgb(32,32,32,1)), url('https://images.unsplash.com/photo-1492446190781-58ac4285911d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=994&q=80');
    background-repeat: no-repeat;
    background-size: 100%;
    
    padding: 0;
    overflow-x: hidden; 

`

export const CustomImg = styled.img`
    background-position: 100% 100%;
    height: auto;
    transform: rotate(180deg);
    margin: 0; 
    padding: 0; 
    width: 100%;
    background-size: 100%;
    background-attachment: fixed;
    
`
