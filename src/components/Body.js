import React from "react";
import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";
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
      <Contact />
    </BodyContainer>
  );
}

export default Body;

const BodyContainer = styled.div`
  height: 100%;
  flex: 0.8;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
  margin: 0px auto;
  @media (min-width: 320px) and (max-width: 480px) {
    flex: 1;
    padding: 0 30px;
    margin: 0;
  }
`;
