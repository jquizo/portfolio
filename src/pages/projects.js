import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Projects extends Component {
    render() {
        return (
            <section>
                <h1 class='text-secondary'>Projects</h1>
            <hr />
            <div className='projects'>
              <div>
                <h4 className='projectName'>Weather App</h4>
                <a className='viewLink' href="https://jquizo.github.io/react-weatherapp/">
                  <button className='projectBtn viewBtn'>
                   <FontAwesomeIcon icon={['fas', 'eye']} />
                    View project
                  </button>
                </a>
                <a className='gitLink' href="https://github.com/jquizo/react-weatherapp">
                <button className='projectBtn gitBtn'>
                   <FontAwesomeIcon icon={['fab', 'github']} />
                    Github
                </button>
                </a>
                  <p>Minimalistic weather app.
                    <br />
                    Viewing on phone work in progress, Will add media queries soon.
                  </p>
              </div>   
              <div>
                  <h4 className='projectName'>Cake website</h4>
                  <a className='viewLink' href="https://jquizo.github.io/Sweet_merchant/">
                  <button className='projectBtn viewBtn'>
                   <FontAwesomeIcon icon={['fas', 'eye']} />
                    View project
                  </button>
                  </a>
                  <a className='gitLink' href="https://github.com/jquizo/Sweet_merchant">
                  <button className='projectBtn gitBtn'>
                   <FontAwesomeIcon icon={['fab', 'github']} />
                    Github
                  </button>
                  </a>
                  <p>Cake website for my sister. 
                  <br />
                   Made using using Bootstrap.</p>
                  
              </div>
              <div>
                  <h4 className='projectName'>Software list</h4>
                  <a className='viewLink' href="https://jquizo.github.io/Useful_softwarelist">
                  <button className='projectBtn viewBtn'>
                   <FontAwesomeIcon icon={['fas', 'eye']} />
                    View project
                  </button>
                  </a>
                  <a className='gitLink' href="https://github.com/jquizo/Useful_softwarelist">
                  <button className='projectBtn gitBtn'>
                   <FontAwesomeIcon icon={['fab', 'github']} />
                    Github
                  </button>
                  </a>
                  <p>List I made to keep track of useful software.
                  </p>
              </div>
            </div>
            </section>
        )
    }
}


export default Projects