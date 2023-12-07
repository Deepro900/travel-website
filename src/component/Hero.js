import React from 'react';
import "./HeroStyless.css";

const Hero = (props) => {
    return (
        <div>
            <div className={props.cName}>
                <img alt="herpImg" src={props.heroImg} />
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>
                        {props.buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;