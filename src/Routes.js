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

export default function Routes({ data: isDarkMode, appProps }) {
  
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} appProps={appProps} isDarkMode={isDarkMode} options={{ title: 'Jules' }} />} />
            <Route path="/blog" render={(props) => <Blog {...props} appProps={appProps} blogs={blogData.blogs} isDarkMode={isDarkMode} />} />
            <Route path="/projects" render={(props) => <Projects {...props} appProps={appProps} isDarkMode={isDarkMode} />} />
            <Route path="/tutorials" render={(props) => <Tutorials {...props} appProps={appProps} isDarkMode={isDarkMode} />} />
            <Route path="/music" render={(props) => <Music {...props} appProps={appProps} isDarkMode={isDarkMode} />} />
            { /* Finally, catch all unmatched routes */ }
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
    );
}
