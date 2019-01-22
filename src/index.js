import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li className="nav-logo">Logo Goes Here</li>
          <li className="nav-text">Nav Goes Here</li>
        </ul>
      </nav>

      <div className="container">
        <h1 className="grid-header">Input Screen</h1>
        <div className="grid-items">
          <h2 className="header">Fields</h2>

          <div className="grid-label">Field 1</div>
          <input className="grid-input" type="text" />

          <div className="grid-label">Field 2</div>
          <input className="grid-input" type="text" />

          <div className="grid-label">Field 3</div>
          <input className="grid-input" type="text" />

          <div className="grid-label">Field 4</div>
          <input className="grid-input" type="text" />

          <div className="grid-label">Field 5</div>
          <input className="grid-input" type="text" />

          <div className="submit">
            <button className="btn-cancel">CANCEL</button>
            <button className="btn-submit">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
