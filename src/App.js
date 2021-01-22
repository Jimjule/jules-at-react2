import React, { useState } from 'react';
import './App.css';
import Routes from "./Routes";
import Header from "./components/Header";

function App() {
  let darkModeSession = sessionStorage.getItem('darkmode');
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(darkModeSession) === true);

  const toggleDarkMode = (isDark) => {
    setIsDarkMode(isDark);
    sessionStorage.removeItem('darkmode');
    sessionStorage.setItem('darkmode', isDark);
  }

    return (
      <div>
        {/*<script crossOrigin src="https://s3.amazonaws.com/jules.at"/>*/}
        <Header data={isDarkMode} onSend={toggleDarkMode} />
        <Routes data={ isDarkMode } />
      </div>
    );
}
export default App;
