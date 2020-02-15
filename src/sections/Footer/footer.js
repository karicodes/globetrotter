import React, {Component} from "react";
import "./footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="row">
                    <div className="column">
                        <div className="column-title">
                            Share on:
                        </div>
                        <div className="social-media">
                            <span className="social-medias">Instagram</span>
                            <span className="social-medias">Facebook</span>
                            <span className="social-medias">Twitter</span>
                        </div>
                    </div>
                    <div className="column">
                        <div className="column-title">
                            Follow us on:
                        </div>
                        <div className="social-media">
                            <span className="social-medias">Instagram</span>
                            <span className="social-medias">Facebook</span>
                            <span className="social-medias">Twitter</span>
                            <span className="social-medias">Email</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button className="btn-footer" onClick={() => window.print()}>Print</button>
                    <button className="btn-footer">Download PDF</button>
                </div>
                <hr/>
                <div className="row">
                    © 2020 Globe Trotter
                </div>
            </footer>
        );
    }
}

export default Footer;
