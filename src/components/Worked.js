import React from "react";
import styled from "styled-components";
import AOS from "aos";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import "aos/dist/aos.css";

function Worked() {
  AOS.init();

  return (
    <WorkedContainer data-aos="fade-right" id="work">
      <h2>
        Where I've Worked <span>()</span>
      </h2>{" "}
      <WorkedContent>
        <h4>
          Front-end developer{" "}
          <a target="_blank" href="https://decibelads.com/" rel="noreferrer">
            @ Decibel
          </a>
        </h4>
        <SmallP>Sep 2021 - Present</SmallP>
        <div>
          <ul>
            <li>
              <ArrowRightIcon fontSize={"15"} />
              Translate Decibel Ads, entire client-side V2 and V3 UI/UX mock-ups
              into code to be implemented into websites
            </li>
            <li>
              <ArrowRightIcon fontSize={"15"} />
              Collaborated with the Marketing Manager to re-design the landing
              page for Decibel which lead to more users coming
            </li>
            <li>
              <ArrowRightIcon fontSize={"15"} />
              Participated in design sessions with the C-Suite Executives,
              business analysts, and other team members to analyze business
              requirements and outline the proposed IT solution for shortening
              the user onboarding flow by 50%
            </li>
            <li>
              <ArrowRightIcon fontSize={"15"} />
              Created a library of reusable components to be used throughout the
              websites
            </li>
            <li>
              <ArrowRightIcon fontSize={"15"} />
              Monitoring for bugs in the code, and identifying the sources of
              the problems
            </li>
            <li>
              <ArrowRightIcon fontSize={"15"} />
              Agile project management tool: Jira, Pivotal tracker, linear
            </li>
          </ul>
        </div>
      </WorkedContent>
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
  h2 {
    margin-bottom: 8px;

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
    h2 {
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
