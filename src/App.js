import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'

//Pages
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import NoPage from './pages/noPage';
//Components
import Sidenav from './components/sidenav';

// FONTAWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
        <Sidenav />
        </div>    
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </HashRouter>
    );
  }
}


export default App;
