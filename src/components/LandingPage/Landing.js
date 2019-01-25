import React from "react";
import SideMenu from "../Navigation/SideMenu.js";
import Form from "../Forms/Form.js";
import { Container } from "./Container.js";
//import "./styles.css";

class Landing extends React.Component {
  render() {
    return (
      <Container>
        <SideMenu />
        <Form />
      </Container>
    );
  }
}

export default Landing;
