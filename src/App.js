import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Harare" />
        <footer>
          This project was coded by Josephine Marecha and is {""}
          <a href="https://github.com/dahnedewy/my-app" target="blank" rel="">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
