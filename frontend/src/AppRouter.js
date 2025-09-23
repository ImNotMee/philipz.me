import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from './Portfolio/Portfolio.js';
import ErrorPage from './components/ErrorPage.js';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Portfolio}/>
        <Route component={ErrorPage}/>
      </Switch>
    </Router>
  );
}

export default AppRouter;
