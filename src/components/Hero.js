import React from "react";
import hero from '../assets/hero.png';

export default function Hero(){
    return(
        <div className="heroDiv">
            <img className="heroImg" src={hero} alt="hero image1"/>
            <h1>
                Hi ,I'm Yonas Solomon 
            </h1>
            <p>
                Front-end developer currently learning software enginnering at AASTU 
            </p>
        </div>
    );
}
