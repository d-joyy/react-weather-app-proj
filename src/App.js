import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Japan" />
        <footer>
          This project was coded by Danielle and is{" "}
          <a
            href="https://github.com/d-joyy/react-weather-app-proj"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
