import React from "react";
import styled from "styled-components";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import CodeIcon from "@material-ui/icons/Code";
import WebAssetIcon from "@material-ui/icons/WebAsset";
function SideProject({ title, desc, skill, codelink, livelink }) {
  console.log(skill);
  return (
    <SideProjectContainer>
      <Header>
        <HeaderLeft>
          <FolderOpenIcon fontSize="large" />
        </HeaderLeft>
        <HeaderRight>
          <a href="#">
            <CodeIcon />
          </a>
          <a href="#">
            <WebAssetIcon />
          </a>
        </HeaderRight>
      </Header>
      <a href="#">
        <Body>
          <h2>{title}</h2>
          <p>{desc}</p>
        </Body>
      </a>
      <Footer>
        <ul>
          {skill.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </Footer>
    </SideProjectContainer>
  );
}

export default SideProject;

const SideProjectContainer = styled.div`
  max-width: 300px;
  margin-bottom: 30px;
  background-color: #1e2a3a;
  padding: 20px 30px;
  :hover {
    transition: transform 0.2s ease-in-out !important;
    transform: scale(1.1) !important;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeaderLeft = styled.div``;
const HeaderRight = styled.div`
  .MuiSvgIcon-root {
    color: #54b689;
    :hover {
      transition: transform 0.2s ease-in-out !important;
      transform: scale(1.2) !important;
    }
  }
`;
const Body = styled.div`
  margin: 20px 0;

  :hover {
    color: #54b689;
  }
`;
const Footer = styled.div`
  ul {
    display: flex;
    list-style: none;
    li {
      padding-right: 20px;
    }
  }
`;
