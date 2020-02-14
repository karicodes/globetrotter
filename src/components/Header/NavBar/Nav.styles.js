import styled from 'styled-components'; 

export const CustomNav = styled.div`
    font-style: oblique;
    margin-left: 3%;
    margin-right: 5%;
    margin-top: 3%;     
    text-align: left; 
    font-family: 'Palatino Linotype';
    font-size: 1.1rem;
    position:fixed;
    top:0;
    overflow: hidden;

    a {
        color: #00b3b3;
        text-decoration: none;
    }

    a:visited {
        color: #f98686;
        text-decoration: none;
    }

    a:hover, a:active, a:focus {
        color:#ffd480;
        text-decoration: none;
    }
`;

