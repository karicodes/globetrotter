import React from 'react';
import CustomLogo from './Logo/Logo.js';
import CustomNav from './NavBar/Nav.js';
import { Container, CustomImg } from './Header.styles.js';


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
