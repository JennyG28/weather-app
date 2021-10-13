import React from "react";
import './App.css';
import Search from "./Search";

function App() {
   return (
    <div className="App">
      <div>
        <h1>Weather App</h1>
        <p>
          <Search />
        </p>
      </div>
    </div>
  );
}

export default App;
