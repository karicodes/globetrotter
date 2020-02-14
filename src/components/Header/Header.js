import React from 'react';
import WelcomeBack from './Welcome/Welcome.js';
import CustomLogo from './Logo/Logo.js';
import CustomNav from './NavBar/Nav.js';
import CustomButton from './Button/Button.js';
import background1 from "./Images/background1.jpg";

class Header extends React.Component {
    render() {
        return (
            <div>
                <img src={background1}  alt="background"
                 background-position="center"
                 background-repeat="no-repeat"
                 background-size="cover"
                 height= "100%"
                 width="100%"
                 margin-top="0%"
                 padding="0px"/> 
                 
                <CustomNav />
                <WelcomeBack />
                <CustomButton />
                <CustomLogo />
            </div>
        )
    }
}

export default Header;
