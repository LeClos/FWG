import React from "react";
import "./App.css";

function Score() {
  return (
    //   Score Board
    <div className="score">
      <div className="score-board">
        <div id="user-label" className="badge">
          user
        </div>
        <div id="comp-label" className="badge">
          comp
        </div>
        <span id="user-score">0</span>
        <span> : </span>
        <span id="comp-score">0</span>
      </div>

      {/* Choice section */}
      <div className="result">
        <p className="action">Select your choice</p>
      </div>
      <div className="choices">
        <div className="choice" id="Fire">
          <img src={require("./img/rock.jpg")} />
        </div>
        <div className="choice" id="Water">
          <img src={require("./img/paper.png")} />
        </div>
        <div className="choice" id="Grass">
          <img src={require("./img/scissors.png")} />
        </div>
      </div>
      <p id="action-message">Make your move</p>
    </div>
  );
}

export default Score;
