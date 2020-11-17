import React from 'react';
import './App.css';
import Routes from "./Routes";
import Header from "./components/Header";

function App() {
    return (
      <div className="App">
        {/*<script crossOrigin src="https://s3.amazonaws.com/jules.at"/>*/}
        <Header />
        <Routes/>
      </div>
    );
}
export default App;
