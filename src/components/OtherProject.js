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
          desc="Using Redux, one can exchange the data between unconnected components and form a to do list."
          skill={["React", "Redux"]}
          codelink="https://github.com/wonho-jung/Redux-todo"
          livelink="https://relaxed-yalow-1735d7.netlify.app/"
        />
        <SideProject
          title="Linkedin-clone"
          desc="A user can register on this website, login and leave message on the home page."
          skill={["React", "Redux", "Firebase"]}
          codelink="https://github.com/wonho-jung/linkedin-clone"
          livelink="https://hopeful-mestorf-42af11.netlify.app/"
        />
        <SideProject
          title="SnapChat"
          desc="This is a simple app that allows a user to send a message with a real time picture through react-webcam."
          skill={["React", "Redux", "Firebase"]}
          codelink="https://github.com/wonho-jung/snapchat"
          livelink="https://snapchat-clone-81286.web.app/"
        />
        <SideProject
          title="Gmail-clone"
          desc="This app is modeled based on the Gmail page. Users can send and receive e-mails."
          skill={["React", "Redux", "Firebase"]}
          codelink="https://github.com/wonho-jung/gmail-clone"
          livelink="https://clone-a1e9b.web.app/"
        />
        <SideProject
          title="google search"
          desc="This is a search engine. Similar to Google, users can find information on this app through google search API."
          skill={["React", "CustomHook", "Firebase"]}
          codelink="https://github.com/wonho-jung/google-clone"
          livelink="https://optimistic-banach-e16c32.netlify.app/"
        />
        <SideProject
          title="Airbnb-clone"
          desc="This app is modeled based on Airbnb. It consists of home and search pages without actual functions for reserving a temporary stay. "
          skill={["React"]}
          codelink="https://github.com/wonho-jung/airbnb-clone-master"
          livelink="https://wonderful-swartz-858f40.netlify.app/"
        />
      </OtherProjectContent>
      <MoreProject style={{ display: blockDiv }}>
        <SideProject
          title="slackChat"
          desc="A user can login with a Google account. The user can create a channel, join a channel, and chat with other users on the platform."
          skill={["React", "Redux", "Firebase"]}
          codelink="https://github.com/wonho-jung/slack-clone"
          livelink="https://slack-clone-6f504.firebaseapp.com/"
        />
        <SideProject
          title="Clipboard landing page"
          desc="This app is a landing page based on the responsive web design."
          skill={["HTML&CSS"]}
          codelink="https://github.com/wonho-jung/wonho-jung-clipboard-landing-page-master"
          livelink="https://wonho-jung.github.io/wonho-jung-clipboard-landing-page-master/"
        />
        <SideProject
          title="
          Flyo-landing"
          desc="This app is a landing page based on the responsive web design."
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
  width: 100%;
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
    grid-gap: 5px;
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  @media (min-width: 1008px) and (max-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  @media only screen and (min-width: 1301px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;
const MoreProject = styled.div`
  @media only screen and (max-width: 640px) {
    display: grid;
    justify-content: center;
    grid-gap: 20px;
  }
  @media (min-width: 641px) and (max-width: 1007px) {
    display: grid;

    grid-template-columns: 1fr 1fr;
    padding-top: 20px;

    grid-gap: 20px;
  }
  @media (min-width: 1008px) and (max-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 20px;

    grid-gap: 20px;
  }
  @media only screen and (min-width: 1301px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 20px;
    grid-gap: 20px;
  }
`;
