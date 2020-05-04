import React from "react";
import { BrowserRouter as Router, Route, Switch, HashRouter} from "react-router-dom";

import Home from "./Home";
import About from "./js/pages/About";
import Works from "./js/pages/Works";
import Contact from "./js/pages/Contact";
import MediaQuery from "react-responsive";

import ScrollToTop from './js/components/ScrollToTopOnMount';

import NavigationBar from "./js/NavBar";

function App() {
    return(
      <div>
        <MediaQuery maxDeviceWidth={767}>
        <HashRouter>
        <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
            <NavigationBar responsive="phone"/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
        </HashRouter>
        </MediaQuery>
        <MediaQuery minDeviceWidth={768}>
        <HashRouter>
        <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
            <NavigationBar responsive="desktop"/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
        </HashRouter>
        </MediaQuery>
      </div>
    );
}

export default App;