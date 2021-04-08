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
  padding-left: 100px;
  padding-right: 100px;
  margin: 0px auto !important;
`;
