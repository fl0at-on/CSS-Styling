import React from "react";
import FormFields from "./FormFields.js";
import { Link } from "react-router-dom";
import { Items, Header } from "./styled/Grid/index.js";
import { ButtonCancel } from "./styled/ButtonCancel.js";
import { ButtonSubmit } from "./styled/ButtonSubmit.js";
import { Submit } from "./styled/Submit.js";
import { LandingHeader } from "./styled/LandingHeader.js";

const Fields = [
  { name: "Field 1" },
  { name: "Field 2" },
  { name: "Field 3" },
  { name: "Field 4" },
  { name: "Field 5" }
];

class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LandingHeader>Input Screen</LandingHeader>

        <Items>
          <Header>Fields</Header>
          {Fields.map((field, index) => {
            return <FormFields key={index} field={field} />;
          })}

          <Submit>
            <ButtonCancel>CANCEL</ButtonCancel>
            <ButtonSubmit to="/">SUBMIT</ButtonSubmit>
          </Submit>
        </Items>
      </React.Fragment>
    );
  }
}

export default Landing;
