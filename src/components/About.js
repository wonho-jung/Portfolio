import React from "react";
import styled from "styled-components";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import AOS from "aos";
import "aos/dist/aos.css";
import wonhoJungPic from "../assets/wonhoJungPic.jpg";
function About() {
  AOS.init();
  return (
    <AboutContainer data-aos="fade-right" id="about">
      <h2>
        About Me <span>()</span>
      </h2>
      <AboutContent>
        <ContentLeft>
          <p>
            Hello! My name is Samuel Jung, and my passion lies with front-end
            development. They nicknamed me &quot;Sonic&quot; because of how fast
            I was able to deliver projects ahead of schedule. I&apos;m a gold
            medal effort, Frontend Developer with over 2 years experience
            turning feedback into custom solutions, proactively identifying
            bottlenecks, & spearheading mobile applications that are streamlined
            for performance, speed, & efficiency.
          </p>
          <p>Here are a few tools that I&apos;ve been working with recently:</p>
          <ul>
            <li>
              <ArrowRightIcon fontSize="small" />
              JavaScript (ES6+) / TypeScript
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              React
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              Redux
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              Unstated-next
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              Styled-components
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              Material-UI
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              Firebase
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              HTML5 & CSS3
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              Jira / Linear / Pivotal Tracker
            </li>
          </ul>
        </ContentLeft>
        <ContentRight>
          <img src={wonhoJungPic} alt="wonho_profile" />
        </ContentRight>
      </AboutContent>
      <AboutImgMoboile>
        <img src={wonhoJungPic} alt="wonho_profile" />
      </AboutImgMoboile>
    </AboutContainer>
  );
}

export default About;

const AboutContainer = styled.div`
  margin-bottom: 50px;
  height: 100%;
  ul {
    padding-top: 10px;

    display: grid;
    grid-template-columns: auto auto;
    li {
      line-height: 20px;
      font-size: 13px;
      display: flex;
      align-items: center;
      list-style: none;
      .MuiSvgIcon-root {
        color: #54b689;
      }
    }
  }
  h2 {
    span {
      color: #54b689;
    }
  }

  @media only screen and (min-width: 1008px) {
    margin-bottom: 150px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      position: absolute;
      top: -70px;
      left: 0;
    }
  }
`;
const AboutContent = styled.div`
  max-width: 900px;
  display: flex;
`;
const ContentLeft = styled.div`
  line-height: 1.5rem;
`;
const ContentRight = styled.div`
  img {
    width: 250px;
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    display: none;
  }
  @media only screen and (min-width: 1008px) {
    display: block;
  }
`;
const AboutImgMoboile = styled.div`
  @media only screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    border-radius: 999px;
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    border-radius: 999px;
  }
  @media only screen and (min-width: 1007px) {
    display: none;
  }

  img {
    border-radius: 999px;
    width: 250px;
  }
`;
