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

        <div data-testid="toggle-darkmode" className="toggle-darkmode">
          <label className="switch">
            <input type="checkbox" checked={!!isDarkMode} onChange={(event) => handleSubmit(event.target.checked)} />
            <span className="slider round"></span>
          </label>
        </div>

      </div>

      <div className="nav-container">
        <a href='/' className="nav home">Home</a>
        <a href='/blog' className="nav blog">Blog</a>
        <a href='/projects' className="nav projects">Projects</a>
        <a href='/music' className="nav music">Music</a>
      </div>

      <div className={`main-margin ${isDarkMode ? 'dark' : 'light'}`} />
    </div>
  );
}
export default Header;
