import React from "react";
import styled from "styled-components";
import "./App.css";

const Button = styled.button`
  padding: 8px 10px;
  border: none;
  border-radius: 4px;
  background: red;
  color: white;
`;

const ButtonTwo = styled(Button)`
  background: yellow;
  color: black;
`;

const Heading1 = styled.h1`
  color: blue;
`;

const Heading6 = styled.h6`
  color: green;
`;

function App() {
  return (
    <React.Fragment>
      <Button>Click Me!</Button>
      <Heading1>This is heading one</Heading1>
      <Heading6>This is heading six</Heading6>
      <ButtonTwo>click me again</ButtonTwo>
    </React.Fragment>
  );
}

export default App;
