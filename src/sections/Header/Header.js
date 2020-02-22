import React from 'react';
import CustomLogo from './Logo/Logo';
import CustomNav from './NavBar/Nav';
import { Container, CustomImg } from './Header.styles';
import StarfieldAnimation from 'react-starfield-animation';

class Header extends React.Component {
    render() {
        return (
            <Container className="mimmiemouse">
                <StarfieldAnimation
                    numberOfParticles={6000}
                    alphaFactor={100.0}
                    lineWidth={2.0}
                    depth={500}
                    style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                    }}></StarfieldAnimation>
                <CustomImg/>
                <CustomNav />
                <CustomLogo />
            </Container>
        )
    }
}

export default Header;
