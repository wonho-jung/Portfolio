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
        <h1>
          Contact<span>()</span>{" "}
        </h1>
        <p>Feel free to send an e-mail</p>
        <p> I'll try my best to get back to you!</p>

        <p> won9.developer@gmail.com</p>
      </div>
      <Icons>
        <a href="">
          {" "}
          <GitHubIcon />
        </a>
        <a href="">
          {" "}
          <InstagramIcon />
        </a>
        <a href="">
          {" "}
          <FacebookIcon />
        </a>

        <a href="">
          {" "}
          <LinkedInIcon />
        </a>
      </Icons>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled.div`
  height: 100%;
  h1 > span {
    color: #54b689;
  }
`;

const Icons = styled.div`
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
`;
