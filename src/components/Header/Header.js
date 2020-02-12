import React from 'react';
import WelcomeBack from './Welcome/Welcome.js';
import CustomLogo from './Logo/Logo.js';
import CustomNav from './Nav/Nav.js';
import CustomButton from './Button/Button.js';

class Header extends React.Component {
    render() {
        return (
            <div>
                <CustomNav />
                <WelcomeBack />
                <CustomButton />
                <CustomLogo />
            </div>
        )
    }
}

export default Header;