import React from "react";
import styled from "styled-components";
import spotify from "../assets/spotify1.PNG";
import amazon from "../assets/amazon.PNG";
import cov19 from "../assets/cov19.PNG";

import netfilx from "../assets/netfilx.PNG";

import samcha from "../assets/samcha.PNG";
import wontwitter from "../assets/wontwitter.PNG";

import CodeIcon from "@material-ui/icons/Code";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import AOS from "aos";
import "aos/dist/aos.css";
import OtherProject from "./OtherProject";
function Project() {
  AOS.init();

  return (
    <ProjectContainer id="project">
      <h1 className="projectMain-h1" data-aos="fade-right">
        Project<span>()</span>
      </h1>

      <ProjectContent data-aos="fade-right">
        <ContentImg>
          <a href="https://spotify-clone-c80b5.web.app/" target="_blank">
            <img src={spotify} alt="" />
          </a>
        </ContentImg>

        <ContentIntro>
          <h3>Featured Project</h3>
          <h2>wontify</h2>

          <div className="project-p">
            <p>
              This application utilizes the Spotify Web-API. view your
              playlist,recently played,New Releases,Top playList and more,Search
              singer or sing, audio play with preview of
              track(stop,prev,next,volume control).
            </p>
          </div>
          <div className="project-pbox"></div>

          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Firebase</li>
            <li>Styled-components</li>
            <li>Spotify Web API</li>
          </ul>
          <Icons>
            <a
              href="https://github.com/wonho-jung/wontify/tree/master/src"
              target="_blank"
            >
              <CodeIcon />
            </a>
            <a href="https://spotify-clone-c80b5.web.app/" target="_blank">
              <WebAssetIcon />
            </a>
          </Icons>
        </ContentIntro>
      </ProjectContent>

      <ProjectContent className="reverse" data-aos="fade-right">
        <ContentImg>
          <a href="https://epic-jennings-e181db.netlify.app/" target="_blank">
            <img src={cov19} alt="" />
          </a>
        </ContentImg>

        <ContentIntro className="reverse-intro">
          <h3>Featured Project</h3>
          <h2>Cov-19-tracker</h2>
          <div className="project-p">
            <p>
              Tracking cov-19 case in the world. you can see number of cov-19
              case, Recovered, Deaths and every country. Use disease.sh Api,
              leaflet (map),chart.js.
            </p>
          </div>
          <div className="project-pbox"></div>

          <ul>
            <li>React</li>
            <li>netlify</li>
            <li>chart.js</li>
            <li>leaflet</li>
            <li>disease.sh API</li>
          </ul>
          <Icons>
            <a
              href="https://github.com/wonho-jung/covid-19-tracker/tree/master/src"
              target="_blank"
            >
              <CodeIcon />
            </a>
            <a href="https://epic-jennings-e181db.netlify.app/" target="_blank">
              <WebAssetIcon />
            </a>
          </Icons>
        </ContentIntro>
      </ProjectContent>

      <ProjectContent data-aos="fade-right">
        <ContentImg>
          <a href="https://angry-lamarr-364c96.netlify.app/" target="_blanks">
            <img src={amazon} alt="" />
          </a>
        </ContentImg>

        <ContentIntro>
          <h3>Featured Project</h3>
          <h2>womazon</h2>
          <div className="project-p">
            <p>
              e-commerce store(amazon) with loginPage,
              products,checkout,payment. Use reducer,Axios stripe.com APi,
              firebase,hosting on netlify.
            </p>
          </div>
          <div className="project-pbox"></div>
          <ul>
            <li>React</li>
            <li>Axios</li>
            <li>Firebase</li>
            <li>Reducer</li>
            <li>netlify</li>
            <li>stripe API</li>
          </ul>
          <Icons>
            <a
              href="https://github.com/wonho-jung/Amazone_v2/tree/master/src"
              target="_blanks"
            >
              <CodeIcon />
            </a>
            <a href="https://angry-lamarr-364c96.netlify.app/" target="_blanks">
              <WebAssetIcon />
            </a>
          </Icons>
        </ContentIntro>
      </ProjectContent>

      <ProjectContent className="reverse" data-aos="fade-right">
        <ContentImg>
          <a href="https://wonflix-v2.web.app/" target="_blanks">
            <img src={netfilx} alt="" />
          </a>
        </ContentImg>

        <ContentIntro className="reverse-intro">
          <h3>Featured Project</h3>
          <h2>Wonflix</h2>
          <div className="project-p">
            <p>
              Learning React, Redux and ES6 by buliding a Movie Discovery
              App.Movie page, Tv Page, Search Page,Login Page, Payment Page. Use
              Movie DB API, Firebase as DB and payment(stripe).
            </p>
          </div>
          <div className="project-pbox"></div>
          <ul>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Redux</li>
            <li>Styled-components</li>
            <li>Stripe</li>
            <li>Firebase</li>
          </ul>
          <Icons>
            <a href="https://github.com/wonho-jung/wonflix-v2" target="_blanks">
              <CodeIcon />
            </a>
            <a href="https://wonflix-v2.web.app/" target="_blanks">
              <WebAssetIcon />
            </a>
          </Icons>
        </ContentIntro>
      </ProjectContent>

      <ProjectContent data-aos="fade-right">
        <ContentImg>
          <a href="https://won-twitter.firebaseapp.com/#/" target="_blanks">
            <img src={wontwitter} alt="" />
          </a>
        </ContentImg>

        <ContentIntro>
          <h3>Featured Project</h3>
          <h2>wonitter</h2>
          <div className="project-p">
            <p>
              A simple app built to social media app that you can login with
              github,google, post with picture, remove, update and change
              profile.
            </p>
          </div>
          <div className="project-pbox"></div>
          <ul>
            <li>React</li>
            <li>uuid</li>
            <li>Firebase</li>
          </ul>
          <Icons>
            <a
              href="https://github.com/wonho-jung/won-twitter/tree/master/src"
              target="_blanks"
            >
              <CodeIcon />
            </a>
            <a href="https://won-twitter.firebaseapp.com/#/" target="_blanks">
              <WebAssetIcon />
            </a>
          </Icons>
        </ContentIntro>
      </ProjectContent>

      <ProjectContent className="reverse" data-aos="fade-right">
        <ContentImg>
          <a
            href="https://nervous-volhard-04221d.netlify.app/"
            target="_blanks"
          >
            <img src={samcha} alt="" />
          </a>
        </ContentImg>

        <ContentIntro className="reverse-intro">
          <h3>Featured Project</h3>
          <h2>Samcha</h2>
          <div>
            <div className="project-p">
              <p>
                Website build for korean restaurant SAMCHA in montreal. Learn
                more about CSS skill(grid,design).
              </p>
            </div>
            <div className="project-pbox"></div>
          </div>
          <ul>
            <li>React</li>
            <li>leaflet</li>
            <li>Styled-components</li>
          </ul>
          <Icons>
            <a
              href="https://github.com/wonho-jung/samcha-ver2/tree/master/src"
              target="_blanks"
            >
              <CodeIcon />
            </a>
            <a
              href="https://nervous-volhard-04221d.netlify.app/"
              target="_blanks"
            >
              <WebAssetIcon />
            </a>
          </Icons>
        </ContentIntro>
      </ProjectContent>

      <OtherProject />
    </ProjectContainer>
  );
}

export default Project;

const ProjectContainer = styled.div`
  margin-bottom: 200px;
  height: 100%;

  h1 {
    span {
      color: #54b689;
    }
  }

  @media only screen and (min-width: 1008px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .projectMain-h1 {
      position: absolute;
      top: -80px;
      left: 0;
    }
    .reverse {
      @media only screen and (min-width: 1008px) {
        max-width: 785px;
        display: flex;
        flex-direction: row-reverse;
        border: 1px solid #54b689;
        margin-bottom: 50px;
        position: relative;
      }

      .reverse-intro {
        @media only screen and (min-width: 1008px) {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          .project-p {
            padding: 20px;
            background-color: #1e2a3a;
            height: 100px;
            right: 30%;
            left: 0;

            position: absolute;
            opacity: 0.7;
            :hover {
              opacity: 1;
            }
          }
          .project-pbox {
            height: 100px;
          }
          ul {
            justify-content: center;
            align-items: center;
            li {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
`;

const ProjectContent = styled.div`
  @media only screen and (max-width: 640px) {
    margin-bottom: 50px;
    position: relative;
    border: 1px solid #54b689;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    display: flex;
    margin-bottom: 50px;
    position: relative;
  }
  @media only screen and (min-width: 1008px) {
    max-width: 785px;
    display: flex;
    border: 1px solid #54b689;
    margin-bottom: 50px;
    position: relative;
  }
`;

const ContentIntro = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    li:not(:last-child) {
      padding-right: 10px;
    }
  }

  @media only screen and (max-width: 640px) {
    height: 300px;
    padding: 20px 10px;
    background-color: #111821;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
    :hover {
      opacity: 0.9;
    }
    ul {
      margin: 10px 0;
      font-size: 13px;
    }
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    height: 250px;
    padding: 20px 10px;
    background-color: #111821;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0%, -50%);

    opacity: 0.7;
    :hover {
      opacity: 1;
    }
    ul {
      margin: 20px 0;
    }
  }

  @media only screen and (min-width: 1008px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 383px;
    .project-p {
      padding: 20px;

      background-color: #1e2a3a;
      height: 100px;
      left: 30%;
      /* top: 50%;
      left: 50%;
      transform: translate(-10%, -50%); */
      position: absolute;
      opacity: 0.7;
      :hover {
        opacity: 1;
      }
    }

    .project-pbox {
      height: 100px;
    }
    ul {
      justify-content: center;
      align-items: center;
      li {
        font-size: 13px;
      }
    }
  }
`;
const ContentImg = styled.div`
  @media only screen and (max-width: 640px) {
    img {
      width: 100%;
      height: 300px;
    }
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  @media only screen and (min-width: 1008px) {
    img {
      width: 400px;
      height: 353px;
      opacity: 0.5;
      cursor: pointer;
      :hover {
        opacity: 1;
      }
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
