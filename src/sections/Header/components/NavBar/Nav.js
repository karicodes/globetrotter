import React from 'react';
import { CustomNav } from "./Nav.styles.js";


class Nav extends React.Component {
    render() {
        return (
            <CustomNav>
                <form>
                    <li>Home</li>
                    <li>Your Map</li>
                    <li>Follow Us</li>
                </form>
            </CustomNav>
        )
    }
}
        
export default Nav;
