import React from "react";
import styled from "styled-components";

function RightSidebar() {
  return (
    <RightSidebarContainer>
      <p>won9.developer@gmail.com</p>
    </RightSidebarContainer>
  );
}

export default RightSidebar;

const RightSidebarContainer = styled.div`
  /* padding: 0 20px; */
  position: sticky;
  top: 600px;
  height: fit-content;
  flex: 0.1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 150px;
  writing-mode: vertical-rl;
`;
