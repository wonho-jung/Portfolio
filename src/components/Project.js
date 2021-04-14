import React from "react";
import styled from "styled-components";
import spotify from "../assets/spotify1.PNG";
import amazon from "../assets/amazon.PNG";
import cov19 from "../assets/cov19.PNG";

import netfilx from "../assets/netfilx.PNG";

import samcha from "../assets/samcha.PNG";

import CodeIcon from "@material-ui/icons/Code";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import AOS from "aos";
import "aos/dist/aos.css";
import OtherProject from "./OtherProject";
function Project() {
  AOS.init();

  return (
    <ProjectContainer data-aos="fade-right" id="project">
      <h1>
        Project<span>()</span>
      </h1>

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
          <img src={cov19} alt="" />
        </ContentImg>

        <ContentIntro>
          <h3>Featured Project</h3>
          <h2>Cov-19-tracker</h2>
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
          <img src={amazon} alt="" />
        </ContentImg>

        <ContentIntro>
          <h3>Featured Project</h3>
          <h2>womazon</h2>
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
          <img src={netfilx} alt="" />
        </ContentImg>

        <ContentIntro>
          <h3>Featured Project</h3>
          <h2>Wonflix</h2>
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
          <h2>WonSlack</h2>
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
          <img src={samcha} alt="" />
        </ContentImg>

        <ContentIntro>
          <h3>Featured Project</h3>
          <h2>Samcha</h2>
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
      <OtherProject />
    </ProjectContainer>
  );
}

export default Project;

const ProjectContainer = styled.div`
  height: 100%;

  h1 {
    font-size: 3em;
    span {
      color: #54b689;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 1.25em;
    }
  }
`;

const ProjectContent = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 30px;
    margin-bottom: 50px;
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
    opacity: 0.9;
    :hover {
      opacity: 0.9;
    }
  }
`;
const ContentImg = styled.div`
  img {
    width: 100%;
    height: 260px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    img {
      width: 100%;
      height: 260px;
    }
  }
`;

const Icons = styled.div`
  .MuiSvgIcon-root {
    padding-right: 10px;
    font-size: 40px;
    color: #54b689;
    :hover {
      transition: transform 0.2s ease-in-out !important;
      transform: scale(1.2) !important;
    }
  }
`;
