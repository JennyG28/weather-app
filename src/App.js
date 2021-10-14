import React from "react";
import './App.css';
import Search from "./Search";

export default function App() {
   return (
    <div className="App">
      <div className="container">
      <div>
        <h1>Weather App</h1>
        <p>
          <Search />
        </p>
        <footer> This project was coded by Jenny Gomez</footer>
      </div>
      </div>
    </div>
  );
}

export default App;
