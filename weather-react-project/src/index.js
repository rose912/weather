import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather App</h1>
    <App />
    <div className="footer">
      <footer>
        This project was coded by
        <a
          href="https://github.com/rose912"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Rosemary Obioma
        </a>{" "}
        is
        <a
          href="https://github.com/rose912/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open sourced on GitHub
        </a>
        <br />
        and
        <a href="https://netlify.com/rose912" target="_blank" rel="noreferrer">
          {" "}
          hosted on Netlify
        </a>
      </footer>
    </div>
  </StrictMode>
);
