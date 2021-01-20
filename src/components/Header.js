import React from 'react';

const Header = ({data: isDarkMode, onSend}) => {

  const handleSubmit = (updateDarkMode) => {
    onSend(updateDarkMode);
  }

  return (
    <div>
      <div className={`div-title ${isDarkMode ? 'dark' : 'div-title-light'}`}>
        <h1>
          Jules
        </h1>

        <div className="toggle-darkmode">
          <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={(event) => handleSubmit(event.target.checked)} />
            <span className="slider round"></span>
          </label>
        </div>

      </div>

      <div className="nav-container">
        <a href='/' className="nav nav-1">Home</a>
        <a href='/blog' className="nav nav-2">Blog</a>
        <a href='/projects' className="nav nav-3">Projects</a>
        <a href='/music' className="nav nav-4">Music</a>
      </div>

      <div className={`main-margin ${isDarkMode ? 'dark' : 'light'}`} />
    </div>
  );
}
export default Header;
