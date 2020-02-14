import React from 'react';
import { CustomNav } from "./Nav.styles.js";
// import bulletpoint1 from "../Images/Abullet.jpg";
import bulletpoint2 from "../Images/Bbullet.jpg";

class Nav extends React.Component {
    render() {
        return (
            <CustomNav>
                
                <table>
                    <tr><img src={bulletpoint2}  alt="bulletpoint" margin= "20px" border= "0px" padding="10px" width="10px" height="10px"/>  <a href="#home">  Home  </a></tr>
                    <tr><img src={bulletpoint2}  alt="bulletpoint" width="10px" height="10px"/>  <a href="#map">  Your Map  </a></tr>
                    <tr><img src={bulletpoint2}  alt="bulletpoint" width="10px" height="10px"/>  <a href="https://www.facebook.com/GlobeTrotter-104230741165881/?view_public_for=104230741165881">  Follow Us  </a></tr>
                </table>
                
            </CustomNav>
        )
    }
}

        
export default Nav;
// margin-left= "3%" margin-right= "3%" margin-bottom= "20px"