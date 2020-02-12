import React from 'react';
import { CustomLogo } from "./Logo.styles.js";


class Logo extends React.Component {
    render() {
        return (
            <CustomLogo>
                <p>Gl<img src="./Images/1.png" alt="pin1"></img>beTr<img src="./Images/2.png" alt="pin2"></img>tter</p>
            </CustomLogo>
        )
    }
}
        
export default Logo;
