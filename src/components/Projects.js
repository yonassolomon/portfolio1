import React from "react";
import hero from '../assets/hero.png';

export default function Project(){
    return(
        <div className="aboutme">
            <img className="heroImage2" src={hero} alt="hero image2"></img>
            <div className="aboutmeText">
                <h1>About Me</h1>
                <p>
                    I am a passionate front-end developer with a keen interest in creating dynamic and responsive web applications. 
                    Currently, I am honing my skills in software engineering at AASTU, where I am learning the latest technologies and best practices in the industry.
                </p>
                <button className="aboutmeBtn">Learn More</button>
                <div className="skills">
                    <div class="skill-line">
                   <div class="line"></div>
                   <div className="percentage">90%</div>
                   <div class="label">CSS</div>
                </div>
                <div class="skill-line">
                   <div class="line"></div>
                   <div className="percentage">98%</div>
                   <div class="label">HTML</div>
                </div>
                <div class="skill-line">
                   <div class="line"></div>
                   <div className="percentage">90%</div>
                   <div class="label">JavaScript</div>
                </div>
                <div class="skill-line">
                   <div class="line"></div>
                   <div className="percentage">95%</div>
                   <div class="label">React</div>
                </div>
                <div class="skill-line">
                   <div class="line"></div>
                   <div className="percentage">80%</div>
                   <div class="label">Php</div>
                </div>
                <div class="skill-line">
                   <div class="line"></div>
                   <div className="percentage">90%</div>
                   <div class="label">Java</div>
                </div>
                <div class="skill-line">
                     <div class="line"></div>
                     <div className="percentage">90%</div>
                     <div class="label">C++</div>
                </div>
                </div>
                
            </div>
        </div>
    );
}