import React from "react";
import styled from "styled-components";
import { Label, Item, Input } from "./styled/Grid/index.js";

class Landing extends React.Component {
  render() {
    return (
      <Item>
        <Label>{this.props.field.name}</Label>
        <Input />
      </Item>
    );
  }
}

export default Landing;
