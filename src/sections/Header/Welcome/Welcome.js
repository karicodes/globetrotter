import React from 'react';
import { WelcomeBack } from "./Welcome.styles";

class Welcome extends React.Component {
    render() {
        return (
            <span>
                <WelcomeBack>
                    Welcome back!
                </WelcomeBack>
            </span>
        )
    }
}
        
export default Welcome;
