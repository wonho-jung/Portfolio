import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      <h3>Hi</h3>
      <h1>I'm Won</h1>
      <h1>web developer.</h1>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  height: 100vh;
  background-color: gray;
`;
