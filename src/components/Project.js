import React from "react";
import styled from "styled-components";
import spotify from "../assets/spotify.PNG";
import CodeIcon from "@material-ui/icons/Code";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import AOS from "aos";
import "aos/dist/aos.css";
function Project() {
  AOS.init();

  return (
    <ProjectContainer data-aos="fade-right" id="project">
      <h1>Project()</h1>
      <ProjectContent>
        <ContentImg>
          <img src={spotify} alt="" />
        </ContentImg>

        <ContentIntro>
          <h3>Featured Project</h3>
          <h2>wontify</h2>
          <p>
            This application utilizes the Spotify WEB-API. playlist,recently
            played,New Releases,Top play lists,work out...,Search singer or
            sing, playing track,stop,prev,next,volumn control.
          </p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Firebase hosting</li>
            <li>Styled-components</li>
            <li>Spotify Web API</li>
          </ul>
          <Icons>
            <CodeIcon />
            <WebAssetIcon />
          </Icons>
        </ContentIntro>
      </ProjectContent>

      <ProjectContent>
        <ContentImg>
          <img src={spotify} alt="" />
        </ContentImg>

        <ContentIntro>
          <h3>Featured Project</h3>
          <h2>wontify</h2>
          <p>
            This application utilizes the Spotify WEB-API. playlist,recently
            played,New Releases,Top play lists,work out...,Search singer or
            sing, playing track,stop,prev,next,volumn control.
          </p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Firebase hosting</li>
            <li>Styled-components</li>
            <li>Spotify Web API</li>
          </ul>
          <Icons>
            <CodeIcon />
            <WebAssetIcon />
          </Icons>
        </ContentIntro>

        <ContentIntro>
          <h3>Featured Project</h3>
          <h2>wontify</h2>
          <p>
            This application utilizes the Spotify WEB-API. playlist,recently
            played,New Releases,Top play lists,work out...,Search singer or
            sing, playing track,stop,prev,next,volumn control.
          </p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Firebase hosting</li>
            <li>Styled-components</li>
            <li>Spotify Web API</li>
          </ul>
          <Icons>
            <CodeIcon />
            <WebAssetIcon />
          </Icons>
        </ContentIntro>
      </ProjectContent>
    </ProjectContainer>
  );
}

export default Project;

const ProjectContainer = styled.div`
  height: 100%;
`;

const ProjectContent = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 30px;
    margin-bottom: 150px;
    position: relative;
  }
`;

const ContentIntro = styled.div`
  ul {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    li {
      padding-right: 10px;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    background-color: #111821;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.6;
    :hover {
      opacity: 0.8;
    }
  }
`;
const ContentImg = styled.div`
  img {
    width: 100%;
    object-fit: contain;
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`;

const Icons = styled.div`
  .MuiSvgIcon-root {
    padding-right: 10px;
    font-size: 40px;
    :hover {
      color: #54b689;
    }
  }
`;
