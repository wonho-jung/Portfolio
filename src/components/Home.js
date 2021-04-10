import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      <h1>Hello!</h1>
      <h1>
        I'm <span className="span-w">W</span>on,
      </h1>
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

  .span-w {
    padding-right: 3px;
    color: #fd2155;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: white;
    text-shadow: 3px 0px #ff1f8f;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    transform: translate(0, -20%);
  }
`;
