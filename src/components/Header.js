import React from "react";
import logo from '../assets/logo.png';
export default function Header(){
    return(
        <header>
            <nav>
                <img className="logo" src={logo} alt="logo" ></img>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}