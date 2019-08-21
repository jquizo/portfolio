import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
      <React.Fragment>
        <Sidenav />
        <Router>
          <Route>
            <Switch>

              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route component={NoPage} />

            </Switch>
          </Route>
        </Router>

      </React.Fragment>
    );
  }
}

export default App;
