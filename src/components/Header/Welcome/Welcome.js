import React from 'react';
import { WelcomeBack } from "./Welcome.styles.js";

class Welcome extends React.Component {
    render() {
        return (
            <span>
                <WelcomeBack>
                    Welcome back, User!
                </WelcomeBack>
            </span>
        )
    }
}
        
export default Welcome;
