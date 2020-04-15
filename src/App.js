import React from 'react';
import './App.css';
import Routes from "./Routes";

function App() {
    return (
      <div className="App">
        {/*<head>*/}
        {/*  <title>Jules</title>*/}
        {/*</head>*/}
        <div>
          <div id = "div-title">
            <h1>
              Jules
            </h1>
          </div>
          <div id = "nav-container">
            <a href='/' id = "nav-1">Home</a>
            <a href='/blog' id = "nav-2">Blog</a>
            <a href='/projects' id = "nav-3">Projects</a>
            <a href='/music' id = "nav-4">Music</a>
          </div>
          
          <div id = "main-margin">
          </div>
        </div>
        <Routes/>
      </div>
    );
}
export default App;
