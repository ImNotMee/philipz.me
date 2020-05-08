import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from './Portfolio.js';
import Projects from './Projects.js';
import Main from './Main.js';
import Loading from './Loading.js';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Loading}/>
        <Route path="/index" exact component={Main}/>
        <Route path="/Photography" exact component={Portfolio}/>
        <Route path="/Projects" exact component={Projects}/>
      </Switch>
    </Router>
  );
}

export default AppRouter;
