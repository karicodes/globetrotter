import React from 'react';
import Welcome from './Welcome';
import Logo from './Logo';
import Nav from './Nav';

class Header extends React.Component {
    render() {
        return (
            <Nav/>
            <Welcome/>
            <Logo/>
        )
    }
}

export default Header;