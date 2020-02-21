import React from 'react';
import { CustomLogo } from "./Logo.styles";
import { FirstInitial } from "./Logo.styles";
import { SecondInitial } from "./Logo.styles";
import imageFile1 from "../Images/pinB.png";
import imageFile2 from "../Images/pinA.png";


class Logo extends React.Component {
    render() {
        return (
            <CustomLogo>
                <div>
                    <p>
                        <FirstInitial>G</FirstInitial> 
                        L
                        <img src={imageFile1} hspace="0" alt="pin" width="90px" height="95px"/>
                        BE
                        <SecondInitial>T</SecondInitial>
                        R
                        <img src={imageFile2} hspace="0" alt="pin" width="90px" height="95px"/>
                        TTER
                    </p>
                </div>
            </CustomLogo>
        )
    }
}


        
export default Logo;


