import React from 'react';
import CustomLogo from './Logo/Logo';
import CustomNav from './NavBar/Nav';
import { Container, CustomImg } from './Header.styles';


class Header extends React.Component {
    render() {
        return (
            <Container>
                <CustomImg/>
                <CustomNav />
                <CustomLogo />
            </Container>
        )
    }
}

export default Header;
