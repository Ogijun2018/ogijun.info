import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./js/pages/About";
import Works from "./js/pages/Works";
import Contact from "./js/pages/Contact";
import MediaQuery from "react-responsive";

import NavigationBar from "./js/NavBar";

function App() {
    return(
      <div>
        <MediaQuery maxDeviceWidth={767}>
        <Router basename={process.env.PUBLIC_URL}>
            <NavigationBar responsive="phone"/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
        </MediaQuery>
        <MediaQuery minDeviceWidth={768}>
        <Router basename={process.env.PUBLIC_URL}>
            <NavigationBar responsive="desktop"/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
        </MediaQuery>
      </div>
    );
}

export default App;