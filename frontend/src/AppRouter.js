import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from './Portfolio/Portfolio.js';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Portfolio}/>
      </Switch>
    </Router>
  );
}

export default AppRouter;
