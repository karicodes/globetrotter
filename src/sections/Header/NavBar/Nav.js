import React from 'react';
import { CustomNav } from "./Nav.styles";
import WelcomeBack from '../Welcome/Welcome';


class Nav extends React.Component {
    render() {
        return (
            <CustomNav>
                    <span>
                        <WelcomeBack/>
                    </span>
                    <a href="#home">  HOME  </a>
                    <a href="#map">  YOUR MAP  </a>
                    <a href="https://www.facebook.com/GlobeTrotter-104230741165881/?view_public_for=104230741165881">  FOLLOW US  </a>
                    <a href="#logout" text-align="right">  LOG OUT </a>
            </CustomNav>
        )
    }
}

        
export default Nav;

