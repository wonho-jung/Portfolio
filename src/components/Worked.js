import React from "react";
import styled from "styled-components";
import AOS from "aos";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import "aos/dist/aos.css";
import WorkImageSlides from "./WorkImageSlides";

function Worked() {
  AOS.init();

  return (
    <WorkedContainer data-aos="fade-right" id="work">
      <h3>
        Where I&apos;ve Worked <span>()</span>
      </h3>{" "}
      <WorkedContent>
        <h4>
          Front-end developer{" "}
          <a target="_blank" href="https://decibelads.com/" rel="noreferrer">
            @ Decibel Ads
          </a>
        </h4>
        <SmallP>Sep 2021 - Present</SmallP>
        <div>
          <ul>
            <li>
              <ArrowRightIcon fontSize={"15"} />
              Hand-code embedded an example ads audio library & an ads
              forecasting tool into the website&apos;s that enabled 300+ users
              to predict the potential success of their ads.
            </li>
            <li>
              <ArrowRightIcon fontSize={"15"} />
              Worked hand-in-hand with the CTO to perform - routine updates &
              other website maintenance tasks.
            </li>
            <li>
              <ArrowRightIcon fontSize={"15"} />
              Based on HotJar analytics, collaborated with the Marketing
              Department&apos;s Director to address user drop in the app, &
              devised a plan to reduce the onboarding process by 60%.
            </li>
            <li>
              <ArrowRightIcon fontSize={"15"} />
              Engineered an updated userflow with input actions that gave the
              user, targeting control in - geo search, dayparting, reusable
              design components, distribution options & more.
            </li>
            <li>
              <ArrowRightIcon fontSize={"15"} />
              Directed the V3 launch of the website, 5 days before the
              anticipated deadline, which was the deciding factor in signing 2
              major clients to the organization.
            </li>
            <li>
              <ArrowRightIcon fontSize={"15"} />
              Converted client&apos;s Google Sheet Data (with 10,000+ input
              items) into JSON and assisted in coordinating advanced audience
              target options.
            </li>
          </ul>
        </div>
      </WorkedContent>
      <WorkImageSlidesContainer>
        <WorkImageSlides />
      </WorkImageSlidesContainer>
    </WorkedContainer>
  );
}

export default Worked;
const WorkedContainer = styled.div`
  margin-bottom: 150px;
  height: 100%;

  ul {
    padding-top: 10px;

    display: grid;
    grid-template-columns: auto;
    li {
      margin: 8px 0;
      font-size: 14px;
      display: flex;
      align-items: center;
      list-style: none;
      .MuiSvgIcon-root {
        color: #54b689;
      }
    }
  }
  h3 {
    margin-bottom: 8px;
    color: #ffffff !important;
    span {
      color: #54b689;
    }
  }

  @media only screen and (min-width: 1008px) {
    margin-bottom: 300px;
    margin-left: 50px;

    position: relative;
    display: flex;
    flex-direction: column;
    h3 {
      position: absolute;
      top: -70px;
      left: 20px;
    }
  }
`;
const WorkedContent = styled.div`
  margin-left: 50px;
  a {
    color: #54b689 !important;
  }
`;
const SmallP = styled.p`
  margin-top: 10px;
  font-size: 12px !important;
`;

const WorkImageSlidesContainer = styled.div`
  @media only screen and (max-width: 1450px) {
    display: none;
  }
`;
