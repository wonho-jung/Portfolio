import React from "react";
import styled from "styled-components";

function LeftSidebar() {
  return <LeftSidebarContainer>logo</LeftSidebarContainer>;
}

export default LeftSidebar;

const LeftSidebarContainer = styled.div`
  flex: 0.1;
  display: flex;
  justify-content: center;
  max-width: 150px;
`;
