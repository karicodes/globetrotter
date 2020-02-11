import React from 'react';
import Nav.styles from "./nav.styles.js";

class Logo extends React.Component {
    render() {
        return (
            <Nav>
                <a href="#home">Home</a>
                <a href="#map">Your Map</a>
                <a href="#follow">Folllow Us</a>
            </Nav>
        )
    }
}

extend default Nav;