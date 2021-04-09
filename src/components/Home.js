import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      <h1>Hello!</h1>
      <h1>I'm Won</h1>
      <h1>Web devloper</h1>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  @media (min-width: 320px) and (max-width: 480px) {
    h1 {
      font-size: 2em;
    }
  }
`;
