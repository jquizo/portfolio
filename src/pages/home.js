import React from 'react';

import '../components/sass/globalstyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => (
    <div id="homepage">
        <section id="about">
            <div className="w-100">
                <h1 className="portfolio-name firstname" >Jason
              <span className="surname"> Requizo</span>
                </h1>
                <div className="subheading"><strong>jason.req@gmail.com</strong></div>
                <hr />
                <p>Self-taught, using Lynda.com, Udemy, Youtube and reddit. I have an interest in Front end development. 
                    <br /> I'm a quick learner, and am continously trying to improve. My end goal is to be a front-end web developer.</p>
                <div className="social-icon-list">
                    <a className="social-icons" href="https://github.com/jquizo" alt='github'>
                        <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
                    </a>
                    <a className="social-icons" href="https://au.linkedin.com/in/jason-requizo-b362a8124" alt='linkedin'>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
                    </a>
                </div>
                <hr />
            </div>
        </section>
        <section id="skills">
                <h2 className="leftheader">Skills</h2>
                <p className='rightheader'>**Orange bar denotes basic knowledge</p>
                <h3> Front end </h3>
                <FontAwesomeIcon icon={['fab', 'html5']} size="4x" title="HTML5" className="tech-icons html5" />
                <FontAwesomeIcon icon={['fab', 'css3']} size="4x" title="CSS3" className="tech-icons css3" />
                <FontAwesomeIcon icon={['fab', 'js']} size="4x" title="ES6" className="tech-icons jss" />
                <br/>
                <span className='iconName html'>HTML</span>
                <span className='iconName css'>CSS3</span>
                <span className='iconName javascript'>JavaScript</span>
                <hr />
                <h6>Frameworks </h6>
                <FontAwesomeIcon icon={['fab', 'bootstrap']} size="4x" title="Bootstrap 4" className="tech-icons boot" />
                <FontAwesomeIcon icon={['fab', 'react']} size="4x" title="React" className="tech-icons react" />
                <br />
                <span className='iconName bootstrap'>Bootstrap</span>
                <span className='iconName react'>React</span>
                <span className="iconName gatsby">GatsbyJS</span>
                <hr />
                <h6>Tools</h6>
                <FontAwesomeIcon icon={['fab', 'npm']} size="4x" title="Node Package Manager" className="tech-icons npm" />
                <FontAwesomeIcon icon={['fab', 'yarn']} size="4x" title="Yarn" className="tech-icons yarn" />
                <FontAwesomeIcon icon={['fab', 'sass']} size="4x" title="Sass" className="tech-icons sass" />
                <hr />
                <h6>Currently learning...</h6>
                <p>
                    <FontAwesomeIcon icon={['fab', 'node']} size="4x" title="Node.js" className="tech-icons nodejs" />
                    <FontAwesomeIcon icon={['fab', 'wordpress']} size="4x" title="Wordpress" className="tech-icons wordpress" />
                    <span className="learning">, Fetch API / Ajax </span> </p>
                <hr />
                
                <ul>
                    <li> Responsive designs, using media queries. </li>
                    <li> I try to make my code as clean &amp; readable to the best of my ability, <br/>using best practices and commenting when necessary. </li>
                    <hr />
                    <li>Bootstrap 4 Theme by BlackrockDigital - https://github.com/BlackrockDigital/startbootstrap-resume</li>
                </ul>
                
        </section>

    </div>

)

export default Home
