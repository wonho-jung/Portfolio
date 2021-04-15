import React from "react";
import styled from "styled-components";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  AOS.init();
  return (
    <AboutContainer data-aos="fade-right" id="about">
      <h1>
        About Me <span>()</span>
      </h1>
      <AboutContent>
        <ContentLeft>
          <p>
            Hello! My name is Wonho Jung and I love creatings that live on the
            web. My interest in web developer started back in 2019 when i learn
            HTML&CSS curriculum in shcool. I've had the privilege of working at
            shool as web developer Intern!
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className>
            <li>
              <ArrowRightIcon fontSize="small" />
              JavaScript (ES6+)
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
              styled-components
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              firebase
            </li>
            <li>
              <ArrowRightIcon fontSize="small" />
              HTML & CSS
            </li>
          </ul>
        </ContentLeft>
        <ContentRight>
          <img
            src="https://scontent.fymq2-1.fna.fbcdn.net/v/t1.18169-9/21767960_1343095129133876_6848337729659723981_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=cJ3FOobZEpsAX_wJipS&_nc_ht=scontent.fymq2-1.fna&oh=3814dd8249b2f296137725bc025b9311&oe=60993813"
            alt=""
          />
        </ContentRight>
      </AboutContent>
      <AboutImgMoboile>
        <img
          src="https://scontent.fymq2-1.fna.fbcdn.net/v/t1.18169-9/21767960_1343095129133876_6848337729659723981_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=cJ3FOobZEpsAX_wJipS&_nc_ht=scontent.fymq2-1.fna&oh=3814dd8249b2f296137725bc025b9311&oe=60993813"
          alt=""
        />
      </AboutImgMoboile>
    </AboutContainer>
  );
}

export default About;

const AboutContainer = styled.div`
  margin-bottom: 150px;
  height: 100%;
  ul {
    padding-top: 10px;

    display: grid;
    grid-template-columns: auto auto;
    li {
      font-size: 13px;
      display: flex;
      align-items: center;
      list-style: none;
      .MuiSvgIcon-root {
        color: #54b689;
      }
    }
  }
  h1 {
    span {
      color: #54b689;
    }
  }

  @media only screen and (min-width: 1008px) {
    margin-bottom: 300px;

    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    h1 {
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
const ContentLeft = styled.div``;
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

  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */

  img {
    border-radius: 999px;
    width: 250px;
  }
`;
