import React from "react";
import styled from "styled-components";
import spotify from "../assets/spotify1.PNG";
import cov19 from "../assets/cov19.PNG";

import netfilx from "../assets/netfilx.PNG";

import CodeIcon from "@material-ui/icons/Code";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import AOS from "aos";
import "aos/dist/aos.css";
import ecommerce from "../assets/ecommerce.JPG";
function Project() {
  AOS.init();

  return (
    <ProjectContainer id="project">
      <h2 className="projectMain-h2" data-aos="fade-right">
        Projects<span>()</span>
      </h2>

      <ProjectContent data-aos="fade-right">
        <ContentImg>
          <a
            href="https://master--glistening-froyo-372771.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={spotify} alt="" />
          </a>
        </ContentImg>

        <ContentIntro>
          <h4>Featured Project(recent project)</h4>
          <h3>Music player</h3>

          <div className="project-p">
            <p>
              This app was made using Spotify web-API. The pages consist of
              home, playlist, search, and library. There is an audio system that
              can be controlled by the user to play music. Some of the features
              of the audio system include playing a song, changing a song
              (previous and next), and a volume control.
            </p>
          </div>
          <div className="project-pbox"></div>

          <ul>
            <li>TypeScript</li>
            <li>React</li>
            <li>Redux-toolkit/Redux-thunk</li>
            <li>Node.js/Express</li>
            <li>MongoDB</li>
            <li>Styled-components / MUI</li>
          </ul>
          <Icons>
            <a
              href="https://github.com/wonho-jung/wontify"
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon />
            </a>
            <a
              href="https://master--glistening-froyo-372771.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
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
          <h4>Featured Project</h4>
          <h3>WonFlix, my own Netflix</h3>
          <div className="project-p">
            <p>
              This is a movie-streaming app. The pages consist of home, login,
              TV, search, detail, and payment. This app offers subscription-base
              services. On the platform, users can search a movie or a TV show
              that the user want to watch. On the user interface, users are
              provided with a short summary of the movie and a trailer.
            </p>
          </div>
          <div className="project-pbox"></div>
          <ul>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Redux</li>
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
          <a
            href="https://epic-jennings-e181db.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cov19} alt="" />
          </a>
        </ContentImg>

        <ContentIntro className="reverse-intro">
          <h4>Featured Project</h4>
          <h3>Covid-19 tracker</h3>
          <div className="project-p">
            <p>
              Tracking Covid-19 cases in the world. You can see the number of
              Covid-19 cases, recovered, deaths in every country.
            </p>
          </div>
          <div className="project-pbox"></div>

          <ul>
            <li>React</li>
            <li>Netlify</li>
            <li>Chart.js</li>
            <li>Leaflet</li>
            <li>Disease.sh API</li>
          </ul>
          <Icons>
            <a
              href="https://github.com/wonho-jung/covid-19-tracker"
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon />
            </a>
            <a
              href="https://epic-jennings-e181db.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <WebAssetIcon />
            </a>
          </Icons>
        </ContentIntro>
      </ProjectContent>

      <ProjectContent className="reverse" data-aos="fade-right">
        <ContentImg>
          <a href="https://e-commerce-75298.web.app/" target="_blanks">
            <img src={ecommerce} alt="" />
          </a>
        </ContentImg>

        <ContentIntro className="reverse-intro">
          <h4>Featured Project</h4>
          <h3>E-commerce store</h3>
          <div className="project-p">
            <p>
              This is an E-commerce store website. The pages consist of home,
              login, products, check out and order history. A user or non-user
              (guest) can buy products on the website. Solely users are able to
              see the order history through the firebase DB. The payment
              function was designed with Stripe API.
            </p>
          </div>
          <div className="project-pbox"></div>
          <ul>
            <li>React</li>
            <li>Axios</li>
            <li>Firebase</li>
            <li>Redux</li>

            <li>Stripe</li>
          </ul>
          <Icons>
            <a href="https://github.com/wonho-jung/e-commerce" target="_blanks">
              <CodeIcon />
            </a>
            <a href="https://e-commerce-75298.web.app/" target="_blanks">
              <WebAssetIcon />
            </a>
          </Icons>
        </ContentIntro>
      </ProjectContent>
      {/* <OtherProject /> */}
    </ProjectContainer>
  );
}

export default Project;

const ProjectContainer = styled.div`
  margin-bottom: 200px;
  height: 100%;
  p {
    line-height: 1.4rem;
  }
  h2 {
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
    .projectMain-h2 {
      position: absolute;
      top: -80px;
      left: 0;
    }
    h4,
    h3,
    ul {
      margin-right: 10px;
      margin-left: 10px;
    }
    .reverse {
      h4 {
        margin-right: 100px;
      }
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
            padding: 10px;
            line-height: 1.5;
            font-size: 14px;
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
            height: 130px;
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
    height: 350px;
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
      padding: 10px;
      line-height: 1.5;
      font-size: 14px;
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
      height: 120px;
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
      height: 350px;
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
  @media only screen and (min-width: 1008px) {
    margin-left:10px;
    }
  }
  .MuiSvgIcon-root {
    margin-right:10px;
    color: #54b689;
    :hover {
      transition: transform 0.2s ease-in-out !important;
      transform: scale(1.2) !important;
    }
  }
`;
