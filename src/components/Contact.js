import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact() {
  return (
    <ContactContainer id="contact">
      <div>
        <h1 style={{ justifyContent: "center", display: "flex" }}>
          Contact<span>()</span>{" "}
        </h1>
        <p>
          For contact, You can reach out to me via{"  "}
          an email to
          <span> wonho.jung92@gmail.com</span>
        </p>
        <p> I'll get back to you as quickly as possible!</p>
      </div>
      <Icons>
        <a href="https://github.com/wonho-jung" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://www.instagram.com/won.9/" target="_blank">
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100003002057392"
          target="_blank"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/won-ho-jung-7a1330170/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </Icons>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
  height: 100%;
  h1 > span {
    color: #54b689;
  }
  p{
    line-height:1.5rem;
  }
  p > a,
      span {
        cursor: pointer;
        color: #54b689;
        opacity: 0.7;
        :hover {
          opacity: 1;
        }
      }
    }
    @media (min-width: 641px) and (max-width: 1007px) {
      div {
      max-width: 600px;


  }
  }
  @media only screen and (min-width: 1008px) {
    div {
      max-width: 600px;


  }
`;

const Icons = styled.div`
  @media only screen and (max-width: 640px) {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    .MuiSvgIcon-root {
      margin-right: 20px;
      color: #54b689;
      :hover {
        transition: transform 0.2s ease-in-out !important;
        transform: scale(1.2) !important;
      }
    }
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    display: none;
  }
  @media only screen and (min-width: 1008px) {
    display: none;
  }
`;
