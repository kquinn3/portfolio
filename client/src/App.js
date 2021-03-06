// React modules
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Page & Layout Components
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Webapps from "./components/pages/Webapps";
import Information from "./components/pages/Information";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/layouts/Navbar";

// Other files
import "./assets/css/App.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/webapps" component={Webapps} />
          <Route exact path="/information" component={Information} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/download" component={Download} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
