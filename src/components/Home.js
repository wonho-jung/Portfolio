import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      <h3>Hi</h3>
      <h1>I'm Won</h1>
      <h1>I build things for the web.</h1>
      <p>I'm montreal-based Web developer</p>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
