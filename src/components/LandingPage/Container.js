import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background-color: var(--grey-4);
  grid-gap: 10px;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 2px 4px var(--grey-2);
  position: relative;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    display: inline-block;
    width: 100%;
  }
`;
