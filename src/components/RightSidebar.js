import React from "react";
import styled from "styled-components";

function RightSidebar() {
  return (
    <RightSidebarContainer>
      <div>
        <a href="#">
          <p>won9.developer@gmail.com</p>
        </a>
      </div>
    </RightSidebarContainer>
  );
}

export default RightSidebar;

const RightSidebarContainer = styled.div`
  div > a > p {
    color: #54b689;
    :hover {
      cursor: pointer;
      transition: transform 0.2s ease-in-out !important;
      transform: scale(1.2) !important;
    }
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    writing-mode: vertical-rl;

    display: block;
    position: sticky;
    top: 500px;
    height: fit-content;
    flex: 0.1;
    display: flex;
    align-items: center;
    max-width: 150px;
  }
  @media only screen and (min-width: 1008px) {
    writing-mode: vertical-rl;

    display: block;
    position: sticky;
    top: 600px;
    height: fit-content;
    flex: 0.1;
    display: flex;
    align-items: center;
    max-width: 100px;
  }
`;
