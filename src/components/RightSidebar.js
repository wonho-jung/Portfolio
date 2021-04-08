import React from "react";
import styled from "styled-components";

function RightSidebar() {
  return (
    <RightSidebarContainer>won9.developer@gmail.com</RightSidebarContainer>
  );
}

export default RightSidebar;

const RightSidebarContainer = styled.div`
  position: sticky;
  top: 600px;
  height: fit-content;
  flex: 0.1;
  display: flex;
  justify-content: center;
`;
