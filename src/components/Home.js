import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      <h1>Hello!</h1>
      <h1>I'm Samuel ,</h1>
      <h1>Web developer.</h1>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 3em;
    line-height: 1.05em;
    font-weight: 700;
  }
  @media only screen and (max-width: 640px) {
    height: 90vh;

    h1 {
      font-size: 2em !important;
      font-weight: 700;
      line-height: 1.25 em;
      transform: translate(0, -100%);
    }
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    height: 100vh;
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.125 em;
  }

  @media only screen and (min-width: 1008px) {
    height: 100vh;

    h1 {
      font-size: 5em;
      font-weight: 700;
      line-height: 1.05 em;
      transform: translate(0, -50%);
    }
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
    color: #54b689;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #54b689;
  }
`;
