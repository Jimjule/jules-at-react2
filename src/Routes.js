import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import Blog from "./containers/Blog";
import Music from "./containers/Music";
import Tutorials from "./containers/Tutorials";
import Projects from "./containers/Projects";
import blogData from "./blog.json";

export default function Routes({ appProps }) {

    return (
        <BrowserRouter>
          <Switch>
            <AppliedRoute path="/" exact component={Home} appProps={appProps} options={{ title: 'Jules' }} />
            <Route path="/blog" render={(props) => <Blog {...props} blogs={blogData.blogs} />} />
            <Route path="/projects" component={Projects} appProps={appProps} />
            <Route path="/tutorials" component={Tutorials} appProps={appProps} />
            <Route path="/music" component={Music} appProps={appProps} />
            { /* Finally, catch all unmatched routes */ }
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
    );
}