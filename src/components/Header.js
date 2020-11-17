import React from 'react';

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
        <a href='/' id = "nav-1">Home</a>
        <a href='/blog' id = "nav-2">Blog</a>
        <a href='/projects' id = "nav-3">Projects</a>
        <a href='/music' id = "nav-4">Music</a>
      </div>

      <div id = "main-margin">
      </div>

    </div>
  );
  }
}
export default Header;
