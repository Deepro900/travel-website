import React from 'react';
import "./FooterStyles.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div>
                    <h1>Trips</h1>
                    <p>Chose your favourite destination</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://github.com/Deepro900">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="buttom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Version</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="https://github.com/Deepro900">Github</a>
                    <a href="/">Issuse</a>
                    <a href="/">project</a>
                    <a href="/">Twitter</a>
                </div>
            </div>

        </div>
    );
};

export default Footer;