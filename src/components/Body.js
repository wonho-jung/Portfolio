import React from "react";
import styled from "styled-components";
import About from "./About";
import Home from "./Home";
import Project from "./Project";

// Linkcolor #54b689 or 00adb5
// font color #393E46 ,eeeeee
function Body() {
  return (
    <BodyContainer>
      <Home />

      <About />

      <Project />
    </BodyContainer>
  );
}

export default Body;

const BodyContainer = styled.div`
  flex: 0.8;
  max-width: 900px;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  padding: 0 100px;
  margin: 0px auto !important;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0;
    flex: 1;
  }
`;
