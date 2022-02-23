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
          and hosted on{" "}
          <a href="https://naughty-raman-8a7d3c.netlify.app">Netlify.</a>
        </footer>
      </div>
    </div>
  );
}
