import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      <h1>Hello!</h1>
      <h1>
        I'm <span className="span-w">W</span>on,
      </h1>
      <h1>Web devloper.</h1>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  h1 {
    font-size: 3em;
    line-height: 1.05em;
  }
  h1:nth-child(1) {
    animation-name: paragraph;
    animation-duration: 1.2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    @keyframes paragraph {
      0% {
        transform: translateX(-1000px);
      }
    }
  }
  h1:nth-child(2) {
    animation-name: paragraph;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    @keyframes paragraph {
      0% {
        transform: translateX(-1000px);
      }
    }
  }
  h1:nth-child(3) {
    animation-name: paragraph;
    animation-duration: 1.8s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    @keyframes paragraph {
      0% {
        transform: translateX(-1000px);
      }
    }
  }

  .span-w {
    font-size: 1.5em;
    color: #54b689;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #54b689;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    transform: translate(0, -10%);
    h1 {
      font-size: 2em;
      line-height: 1.25em;
    }
  }
`;
