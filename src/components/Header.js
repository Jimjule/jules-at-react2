import React from 'react';
import './App.css';

class Header extends React.Component {
  render() {
  return (
    <div>
        <div id = "div-title">
          <h1>
            Jules
          </h1>
        </div>
        <div id = "nav-container">
          <div id = "nav-1">Blog</div>
          <div id = "nav-2">Projects</div>
          <div id = "nav-3">Tutorials</div>
          <div id = "nav-4">Music</div>   
      </div>
      
      <div id = "main-margin">
      </div>
    </div>
  );
}
}
export default Header;
