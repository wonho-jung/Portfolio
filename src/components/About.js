import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutContainer id="about">
      <div>
        <h1>
          About Me <span>()</span>
        </h1>
        <p>
          Hello! My name is Wonho Jung and I love creatings taht live on the
          web. My interest in web devlopment started back in 2019 when i learn
          HTML&CSS curriculum in shcool. I've had the privilege of working at
          shool as web devloper Intern!
        </p>
        <p>
          Here are a few technologies I've been working with recently:
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Redux</li>
            <li>styled-components</li>
            <li>firebase(database,hosting,hooks,auth)</li>
            <li>HTML & CSS</li>
          </ul>
        </p>
      </div>
    </AboutContainer>
  );
}

export default About;

const AboutContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
`;
