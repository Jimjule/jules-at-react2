import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import Blog from "./containers/Blog";
import Music from "./containers/Music";
import Tutorials from "./containers/Tutorials";
import Projects from "./containers/Projects";

export default function Routes({ appProps }) {
    return (
        <BrowserRouter>
          <Switch>
            <AppliedRoute path="/" exact component={Home} appProps={appProps} />
            <Route path="/blog" component={Blog} appProps={appProps} />
            <Route path="/projects" component={Projects} appProps={appProps} />
            <Route path="/tutorials" component={Tutorials} appProps={appProps} />
            <Route path="/music" component={Music} appProps={appProps} />
            { /* Finally, catch all unmatched routes */ }
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
    );
}