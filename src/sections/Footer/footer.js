import React, {Component} from "react";
import "./footer.css";
import { Icon } from 'semantic-ui-react';
import StarfieldAnimation from 'react-starfield-animation';

class Footer extends Component {
    render() {
        return (
            <footer className="footer no-print">
                <StarfieldAnimation
                    numberOfParticles={6000}
                    alphaFactor={100.0}
                    lineWidth={2.0}
                    depth={500}
                    style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                    }}></StarfieldAnimation>

                <div className="row">
                    <div className="column">
                        <div className="column-title">
                            Share on:
                        </div>
                        <div className="social-media">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-medias icon">
                                <Icon name='instagram' />
                            </a>
                            <a href="https://www.facebook.com/Globe-Trotter-110878673833129/" target="_blank" rel="noopener noreferrer" className="social-medias icon">
                                <Icon name='facebook' />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-medias icon">
                                <Icon name='twitter' />  
                            </a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="column-title">
                            Follow us on:
                        </div>
                        <div className="social-media">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-medias icon">
                                <Icon name='instagram' />
                            </a>
                            <a href="https://www.facebook.com/Globe-Trotter-110878673833129/" target="_blank" rel="noopener noreferrer" className="social-medias icon">
                                <Icon name='facebook' />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-medias icon">
                                <Icon name='twitter' />
                            </a>
                            <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" className="social-medias icon">
                                <Icon name='envelope' />
                                &nbsp;Email
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button className="btn-footer " onClick={() => window.print()}>
                        <i className="icon icon-printer"></i>
                        &nbsp;Print</button>
                    <button className="btn-footer" onClick={() => window.print()}>
                        <i className="icon icon-download"></i>
                        &nbsp;Download PDF</button>
                </div>
                
                <hr/>
                <div className="row bottom">
                    © 2020 Globe Trotter
                </div>
            </footer>
        );
    }
}

export default Footer;
