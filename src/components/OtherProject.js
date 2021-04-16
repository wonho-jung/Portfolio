import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import SideProject from "./SideProject";
import AOS from "aos";
import "aos/dist/aos.css";
function OtherProject() {
  AOS.init();

  const [btnState, setBtnState] = useState("More");
  const [blockDiv, setBlockDiv] = useState("none");

  const handleBtn = () => {
    if (btnState === "More") {
      setBtnState("Less");
      setBlockDiv("grid");
    } else {
      setBtnState("More");
      setBlockDiv("none");
    }
  };
  return (
    <OtherProjectContanier>
      <h1 data-aos="fade-right">
        Other Side Projects <span>()</span>
      </h1>
      <OtherProjectContent>
        <SideProject
          title="Redux-todo"
          desc="Learing basic logic of Redux with react."
          skill={["react", "redux"]}
          codelink="https://github.com/wonho-jung/Redux-todo/tree/master/src"
          livelink="https://relaxed-yalow-1735d7.netlify.app/"
        />
        <SideProject
          title="Linkin-clone"
          desc="learn Linkedin webDesign and use firebase database, auth."
          skill={["react", "redux", "firebase"]}
          codelink="https://github.com/wonho-jung/linkedin-clone/tree/master/src"
          livelink="https://hopeful-mestorf-42af11.netlify.app/"
        />
        <SideProject
          title="SnapChat"
          desc="Simple App that you can take a photo,chat with other users."
          skill={["react", "redux", "firebase"]}
          codelink="https://github.com/wonho-jung/snapchat/tree/master/src"
          livelink="https://snapchat-clone-81286.web.app/"
        />
        <SideProject
          title="Gmail-clone"
          desc="compose mail, send data to firebase, get data and use."
          skill={["react", "redux", "firebase"]}
          codelink="https://github.com/wonho-jung/gmail-clone/tree/main/src"
          livelink="https://clone-a1e9b.web.app/"
        />
        <SideProject
          title="google search"
          desc="bulid App to search likes google with google Custom Search API."
          skill={["react", "CustomHook", "firebase"]}
          codelink="https://github.com/wonho-jung/google-clone/tree/main/src"
          livelink="https://optimistic-banach-e16c32.netlify.app/"
        />
        <SideProject
          title="Airbnb-clone"
          desc="Learned design and props in react. "
          skill={["react"]}
          codelink="https://github.com/wonho-jung/airbnb-clone-master/tree/master/src"
          livelink="https://wonderful-swartz-858f40.netlify.app/"
        />
      </OtherProjectContent>
      <MoreProject style={{ display: blockDiv }}>
        <SideProject
          title="slackChat"
          desc="chat app that you can add channel or join channel and chat with another user."
          skill={["react", "redux", "firebase"]}
          codelink="https://github.com/wonho-jung/slack-clone/tree/master/src"
          livelink="https://slack-clone-6f504.firebaseapp.com/"
        />
        <SideProject
          title="Clipboard landing page"
          desc="Learned responsive design mobile, tablet, desktop."
          skill={["HTML&CSS"]}
          codelink="https://github.com/wonho-jung/wonho-jung-clipboard-landing-page-master"
          livelink="https://wonho-jung.github.io/wonho-jung-clipboard-landing-page-master/"
        />
        <SideProject
          title="
          Flyo-landing"
          desc="Responsive design and CSS skill."
          skill={["HTML&CSS"]}
          codelink="https://github.com/wonho-jung/Flyo-landing"
          livelink="https://wonho-jung.github.io/Flyo-landing/"
        />
      </MoreProject>
      <Button onClick={handleBtn}>{btnState}</Button>
    </OtherProjectContanier>
  );
}

export default OtherProject;

const OtherProjectContanier = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 100px;
  button {
    margin-top: 20px;
    border: 1px solid #54b689;
    width: 50px;
    padding: 10px;
    color: #eeeeee;
    :hover {
      background-color: #54b689;
    }
  }

  @media only screen and (min-width: 1008px) {
    h1 {
      margin-bottom: 30px;
    }
  }
`;

const OtherProjectContent = styled.div`
  @media only screen and (max-width: 640px) {
    display: grid;
    justify-content: center;
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1008px) and (max-width: 1300px) {
    display: grid;

    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 1301px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const MoreProject = styled.div`
  @media only screen and (max-width: 640px) {
    display: grid;
    justify-content: center;
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    display: grid;

    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1008px) and (max-width: 1300px) {
    display: grid;

    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 1301px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
