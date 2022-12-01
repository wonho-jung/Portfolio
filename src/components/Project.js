import React from "react";
import styled from "styled-components";
import spotify from "../assets/spotify1.PNG";
import cov19 from "../assets/cov19.PNG";

import netfilx from "../assets/netfilx.PNG";

import travel from "../assets/travel1.JPG";
import wontwitter from "../assets/wontwitter.PNG";

import CodeIcon from "@material-ui/icons/Code";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import AOS from "aos";
import "aos/dist/aos.css";
import OtherProject from "./OtherProject";
import ecommerce from "../assets/ecommerce.JPG";
function Project() {
  AOS.init();

  return (
    <ProjectContainer id="project">
      <h1 className="projectMain-h1" data-aos="fade-right">
        Projects<span>()</span>
      </h1>

      <ProjectContent data-aos="fade-right">
        <ContentImg>
          <a
            href="https://spotify-clone-c80b5.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={spotify} alt="" />
          </a>
        </ContentImg>

        <ContentIntro>
          <h3>Featured Project</h3>
          <h2>Music player</h2>

          <div className="project-p">
            <p>
              This app was made using Spotify web-API. The pages consist of
              home, playlist, search, and libary. There is an audio system that
              can be controlled by the user to play music. Some of the features
              of the audio system include playing a song, changing a song
              (previous and next), and a volume control.
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
              href="https://github.com/wonho-jung/wontify"
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon />
            </a>
            <a
              href="https://spotify-clone-c80b5.web.app/"
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
          <h3>Featured Project</h3>
          <h2>WonFlix, my own Netflix</h2>
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
          <h3>Featured Project</h3>
          <h2>Covid-19 tracker</h2>
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
          <h3>Featured Project</h3>
          <h2>E-commerce store</h2>
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

      {/* <ProjectContent data-aos="fade-right">
        <ContentImg>
          <a href="https://won-twitter.firebaseapp.com/#/" target="_blanks">
            <img src={wontwitter} alt="" />
          </a>
        </ContentImg>

        <ContentIntro>
          <h3>Featured Project</h3>
          <h2>Social media app</h2>
          <div className="project-p">
            <p>
              This is a social media app. The pages consist of home, login, and
              profile. After logging in, users update a post with a picture, a
              status or simply delete a post. On the profile page, users can
              change the personal settings, such as the display name.
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
              href="https://github.com/wonho-jung/won-twitter"
              target="_blanks"
            >
              <CodeIcon />
            </a>
            <a href="https://won-twitter.firebaseapp.com/#/" target="_blanks">
              <WebAssetIcon />
            </a>
          </Icons>
        </ContentIntro>
      </ProjectContent> */}

      {/* <ProjectContent className="reverse" data-aos="fade-right">
        <ContentImg>
          <a href="https://serene-jepsen-9a5fc7.netlify.app" target="_blanks">
            <img src={travel} alt="" />
          </a>
        </ContentImg>

        <ContentIntro className="reverse-intro">
          <h3>Featured Project</h3>
          <h2>Travel app</h2>
          <div>
            <div className="project-p">
              <p>
                This is a travel app. It's a single page website and base on
                responsive web design.
              </p>
            </div>
            <div className="project-pbox"></div>
          </div>
          <ul>
            <li>React</li>
            <li>Gatsby</li>
            <li>Styled-components</li>
          </ul>
          <Icons>
            <a href="https://github.com/wonho-jung/travel" target="_blanks">
              <CodeIcon />
            </a>
            <a href="https://serene-jepsen-9a5fc7.netlify.app" target="_blanks">
              <WebAssetIcon />
            </a>
          </Icons>
        </ContentIntro>
      </ProjectContent> */}

      <OtherProject />
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
    h3,
    h2,
    ul {
      margin-right: 10px;
      margin-left: 10px;
    }
    .reverse {
      h3 {
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
