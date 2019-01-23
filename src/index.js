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
        <div className="side-menu">
          <div className="side-menu-header">Navigation</div>
          <div className="side-menu-item">ITEM 1</div>
          <div className="side-menu-item">ITEM 2</div>
          <div className="side-menu-item">ITEM 3</div>
        </div>
        <h2 className="grid-header">Input Screen</h2>

        <div className="grid-items">
          <h3 className="header">Fields</h3>
          <div className="grid-item">
            <div className="grid-label">Field 1</div>
            <input className="grid-input" type="text" />
          </div>
          <div className="grid-item">
            <div className="grid-label">Field 2</div>
            <input className="grid-input" type="text" />
          </div>

          <div className="grid-item">
            <div className="grid-label">Field 3</div>
            <input className="grid-input" type="text" />
          </div>

          <div className="grid-item">
            <div className="grid-label">Field 4</div>
            <input className="grid-input" type="text" />
          </div>

          <div className="grid-item">
            <div className="grid-label">Field 5</div>
            <input className="grid-input" type="text" />
          </div>

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
