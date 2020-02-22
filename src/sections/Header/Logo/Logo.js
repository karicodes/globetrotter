import React from 'react';
import { CustomLogo } from "./Logo.styles";
import { FirstInitial } from "./Logo.styles";
import { SecondInitial } from "./Logo.styles";
import imageFile1 from "../Images/pinB.png";
import imageFile2 from "../Images/pinA.png";
import "./logo.css";


class Logo extends React.Component {
    render() {
        return (
            <CustomLogo>
                <div>
                    <p>
                        <FirstInitial>G</FirstInitial> 
                        L
                        <img src={imageFile1} className="letter-o" hspace="0" alt="pin" />
                        BE
                        <SecondInitial>T</SecondInitial>
                        R
                        <img src={imageFile2} className="letter-o" hspace="0" alt="pin" />
                        TTER
                    </p>
                </div>
            </CustomLogo>
        )
    }
}


        
export default Logo;


