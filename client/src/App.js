// React modules
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Page & Layout Components
import Home from "./components/pages/Home";
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
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
