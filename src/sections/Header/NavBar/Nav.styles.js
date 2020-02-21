import styled from 'styled-components'; 


export const CustomNav = styled.div`
    margin-right: 10%;
    font-family: 'Palatino Linotype';
    font-size: 0.9rem;
    text-decoration: none;
    text-align: right; 
    align-items: center;
    position:fixed;
    // top: 10px;
    z-index: 2;
    justify-content: space-evenly;
    flex-direction: row;
    display: block;
    box-sizing: border-box;
    top: 0;
    padding: 15px;
    width: 100%;
    height: auto;
    background: #202020;
    
    a {
        line-height: 20px; 
        width: 30%;
        top: 0;
        height: 100%; 
        padding: 10px;
        margin-top: 3%;
        margin-left: 50px; 
        margin-right: 50px;
        font-family: 'Palatino Linotype';
        font-size: 16px; 
        color: #8383A0;
        text-decoration: none;   
        justify-content: space-evenly;
        align-items: center;
        box-sizing: border-box;
        list-style: none;  
        flex-direction: row;
        flex-flow: row wrap;
        vertical-align: sub;
    }
        
    a:hover, a:active, a:focus {
        color: #FE9898;
        line-height: 20px; 
        font-size: 18px;
        text-decoration: underline;
    }
`

