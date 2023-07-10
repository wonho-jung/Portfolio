import React from "react";
import styled from "styled-components";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import CodeIcon from "@material-ui/icons/Code";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import AOS from "aos";
import "aos/dist/aos.css";
function SideProject({ title, desc, skill, codelink, livelink }) {
  AOS.init();
  return (
    <SideProjectContainer data-aos="fade-right">
      <Header>
        <HeaderLeft>
          <FolderOpenIcon fontSize="small" />
        </HeaderLeft>
        <HeaderRight>
          <a href={codelink} target="_blank" rel="noreferrer">
            <CodeIcon />
          </a>
          <a href={livelink} target="_blank" rel="noreferrer">
            <WebAssetIcon />
          </a>
        </HeaderRight>
      </Header>
      <a href={livelink} target="_blank" rel="noreferrer">
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
  h2 {
    margin: 0 !important;
    margin-bottom: 1.5rem;
  }
  position: relative;

  :hover {
    transition: transform 0.2s ease-in-out !important;
    transform: scale(1.1) !important;
  }
  @media only screen and (max-width: 640px) {
    max-width: 300px;
    margin-bottom: 30px;
    background-color: #1e2a3a;
    padding: 20px 30px;
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    max-width: 300px;
    margin: 10px;
    background-color: #1e2a3a;
    padding: 20px;
  }
  @media only screen and (min-width: 1008px) {
    max-width: 260px;
    background-color: #1e2a3a;
    padding: 20px 30px;
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
    position: absolute;
    bottom: 10px;
    display: flex;
    list-style: none;
    li {
      padding-right: 10px;
    }
  }
`;
