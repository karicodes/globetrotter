import React from 'react';
import { CustomLogo } from "./Logo.styles.js";
import { FirstInitial } from "./Logo.styles.js";
import { SecondInitial } from "./Logo.styles.js";
import imageFile1 from "../Images/A.png";
import imageFile2 from "../Images/B.png";


class Logo extends React.Component {
    render() {
        return (
            <CustomLogo>
                <div>
                    <p>
                        <FirstInitial>G</FirstInitial> 
                        L
                        <img src={imageFile1}  alt="pin" width="64px" height="90px"/>
                        BE
                        <SecondInitial>T</SecondInitial>
                        R
                        <img src={imageFile2}  alt="pin" width="64px" height="90px"/>
                        TTER
                    </p>
                </div>
            </CustomLogo>
        )
    }
}


        
export default Logo;

