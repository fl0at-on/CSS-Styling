import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Nav from "../src/components/Navigation/Nav.js";
import SideMenu from "../src/components/Navigation/SideMenu.js";
import Landing from "../src/components/LandingPage/Landing.js";
import First from "../src/components/Page1/First.js";
import Second from "../src/components/Page2/Second.js";
import Error from "../src/components/Error/Error.js";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/1" component={First} />
          <Route path="/2" component={Second} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
