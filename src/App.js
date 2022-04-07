import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./Home";
import About from "./js/pages/About";
import Works from "./js/pages/Works";
import MediaQuery from "react-responsive";
import NavigationBar from "./js/NavBar";

function App() {
    return(
      <div>
        <MediaQuery maxDeviceWidth={767}>
        <Router basename={process.env.PUBLIC_URL}>
          <NavigationBar responsive="phone"/>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </Router>
        </MediaQuery>
        <MediaQuery minDeviceWidth={768}>
        <Router basename={process.env.PUBLIC_URL}>
          <NavigationBar responsive="desktop"/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </Router>
        </MediaQuery>
      </div>
    );
}

export default App;