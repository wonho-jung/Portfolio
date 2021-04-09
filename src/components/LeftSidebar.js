import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function LeftSidebar() {
  return (
    <LeftSidebarContainer>
      <Icons>
        <GitHubIcon />
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </Icons>
    </LeftSidebarContainer>
  );
}

export default LeftSidebar;

const LeftSidebarContainer = styled.div`
  position: sticky;
  top: 600px;
  height: fit-content;
  flex: 0.1;
  display: flex;
  justify-content: center;
  max-width: 150px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  .MuiSvgIcon-root {
    padding-bottom: 15px;
  }
`;
