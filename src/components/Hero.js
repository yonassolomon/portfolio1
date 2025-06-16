import React, { useEffect, useRef } from "react";
import hero from '../assets/hero.png';

export default function Hero() {
    const imgRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Increase the multiplier for more movement
            if (imgRef.current) {
                imgRef.current.style.transform = `translateY(${scrollY * 0.9}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="heroDiv">
            <div>
                <img
                    ref={imgRef}
                    className="heroImg"
                    src={hero}
                    alt="hero image1"
                    style={{ transition: 'transform 0.1s linear' }}
                />
            </div>
            <div>
                <h1>
                    Hi ,I'm Yonas Solomon  Front-end dev
                </h1>
                <p>
                    currently learning software enginnering at AASTU 
                </p>
                <button className="heroBtn">Contact Me</button>
                <button className="heroBtn">Download CV</button>
                 <div className="aboutme">
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
                              <div className="cardContainer">
                            <div className="card">
                                <h2>1 year</h2>
                                <p>Experience in front end developer take intership at sie take</p>
                            </div>
                            <div className="card">
                                <h2>1 year</h2>
                                <p>Experience in front end developer take intership at sie take</p>
                            </div>
                            <div className="card">
                                <h2>1 year</h2>
                                <p>Experience in front end developer take intership at sie take</p>
                            </div>
                          </div>
                          </div>
                     </div>
            </div>
        </div>
    );
}
