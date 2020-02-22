import styled from 'styled-components';


export const CustomLogo = styled.div`
    font-weight: bold;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 17%;   
    text-align: center; 
    font-family: 'Palatino Linotype';
    font-size: 9rem;
    color:   #0a0f0f;
    text-shadow: -2px 0 #00b3b3, 0 1px #00b3b3, 1px 0 #00b3b3, 0 -1px #00b3b3;
    z-index: 2;

    @media (max-width: 1279px) {
        font-size: 7rem;
    }
    @media (max-width: 975px) {
        font-size: 5rem;
    }
    @media (max-width: 750px) {
        font-size: 4rem;
    }
    @media (max-width: 560px) {
        font-size: 2rem;
        margin-top: 40%;
    }
`

export const FirstInitial = styled.span`
    font-size: 13rem;
    @media (max-width: 1279px) {
        font-size: 10rem;
    }
    @media (max-width: 975px) {
        font-size: 8rem;
    }
    @media (max-width: 750px) {
        font-size: 6rem;
    }
    @media (max-width: 560px) {
        font-size: 4rem;
    }
    z-index: 2;
`
export const SecondInitial = styled.span`
    font-size: 13rem;
    @media (max-width: 1279px) {
        font-size: 10rem;
    }
    @media (max-width: 975px) {
        font-size: 8rem;
    }
    @media (max-width: 750px) {
        font-size: 6rem;
    }
    @media (max-width: 560px) {
        font-size: 4rem;
    }
    z-index: 2;
`

