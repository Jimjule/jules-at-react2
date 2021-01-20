import React, { useState } from 'react';
import './App.css';
import Routes from "./Routes";
import Header from "./components/Header";
import { AppContext } from './libs/contextLib';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (isDark) => {
    setIsDarkMode(isDark);
  }

    return (
      <AppContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        {/*<script crossOrigin src="https://s3.amazonaws.com/jules.at"/>*/}
        <Header data={isDarkMode} onSend={toggleDarkMode} />
        <Routes data={ isDarkMode } />
      </AppContext.Provider>
    );
}
export default App;
