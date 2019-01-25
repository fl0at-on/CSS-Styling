import styled from "styled-components";

export const Items = styled.div`
  display: grid;
  grid-column: 2 / span 1;
  grid-column-gap: 10px;
  margin-bottom: 20px;
  grid-template-columns: 50px auto;
  border-radius: 5px;
  height: 400px;

  background-color: rgb(240, 243, 245);
  box-shadow: 0px 2px 4px var(--grey-2);

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 500px;
    margin: 0px;
  }
`;
