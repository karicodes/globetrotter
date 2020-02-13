import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="row">
                    <div className="column">Share on:
                        <div className="social-media">
                            <span>Instagram</span>
                            <span>Facebook</span>
                            <span>Twitter</span>
                        </div>
                    </div>
                    <div className="column">
                        <span>Print</span>
                    </div>
                    <div className="column">
                        <span>Download PDF</span>
                    </div>
                </div>
                <div className="row">
                    <div className="social-media">
                        <span>Instagram</span>
                        <span>Facebook</span>
                        <span>Twitter</span>
                        <span>Email</span>
                    </div>
                </div>
                <p>This is footer </p>
            </footer>
        );
    }
}

export default Footer;
