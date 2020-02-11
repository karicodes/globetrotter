import React from 'react';
import Welcome.styles from "./Welcome.styles";

class Welcome extends React.Component {
    render() {
        return (
                <span> Welcome back! </span>
                <span>
                    <Button>Log Out</Button>
                </span>
        );
    }
}


export default Welcome;
