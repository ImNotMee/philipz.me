import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from './Portfolio.js';
import Main from './Main.js';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Portfolio}/>
        <Route path="/Main" exact component={Main}/>
      </Switch>
    </Router>
  );
}

export default AppRouter;
