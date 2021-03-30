import "./styles/Landing.scss";

import React from "react";

export default function Landing() {
  return (
    <div data-testid="container-landing" className="landing">
      <header className="landing__header">
        <h1>Welcome!</h1>
        <strong>React Boilerplate</strong>
        <a
          className="primary-color"
          href="https://github.com/Brahua"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brahua
        </a>
      </header>
    </div>
  );
}
