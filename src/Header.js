import React from "react";
import "./App.css";

function Header() {
  return (
    // Header
    <header>
      <div className="wrapper" style={{ textAlign: "center" }}>
        <a
          href="https://leclos.github.io/jweb2"
          className="btn btn-info"
          role="button"
          id="mybtn"
        >
          Back to projects
        </a>
      </div>
      <h1>Fire, Water, Grass</h1>
      <p>This is a basic rock, paper, scissors, type game built in react</p>

      {/* Refresh button */}
      <input
        type="button"
        value="Restart"
        onClick={() => window.location.reload(false)}
        className="rb"
      />
    </header>
  );
}

export default Header;
