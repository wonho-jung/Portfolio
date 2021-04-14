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
        Other Projects <span>()</span>
      </h1>
      <OtherProjectContent>
        <SideProject
          title="test"
          desc="asdfasdfsd"
          skill={["react", "redux", "firebase"]}
          codelink="sdfsdf"
          livelink="sdfsdf"
        />
        <SideProject
          title="test"
          desc="asdfasdfsd"
          skill={["react", "redux", "firebase"]}
          codelink="sdfsdf"
          livelink="sdfsdf"
        />
        <SideProject
          title="test"
          desc="asdfasdfsd"
          skill={["react", "redux", "firebase"]}
          codelink="sdfsdf"
          livelink="sdfsdf"
        />
        <SideProject
          title="test"
          desc="asdfasdfsd"
          skill={["react", "redux", "firebase"]}
          codelink="sdfsdf"
          livelink="sdfsdf"
        />
        <SideProject
          title="test"
          desc="asdfasdfsd"
          skill={["react", "redux", "firebase"]}
          codelink="sdfsdf"
          livelink="sdfsdf"
        />
        <SideProject
          title="test"
          desc="asdfasdfsd"
          skill={["react", "redux", "firebase"]}
          codelink="sdfsdf"
          livelink="sdfsdf"
        />
      </OtherProjectContent>
      <MoreProject style={{ display: blockDiv }}>
        <SideProject
          title="test"
          desc="asdfasdfsd"
          skill={["react", "redux", "firebase"]}
          codelink="sdfsdf"
          livelink="sdfsdf"
        />
        <SideProject
          title="test"
          desc="asdfasdfsd"
          skill={["react", "redux", "firebase"]}
          codelink="sdfsdf"
          livelink="sdfsdf"
        />
        <SideProject
          title="test"
          desc="asdfasdfsd"
          skill={["react", "redux", "firebase"]}
          codelink="sdfsdf"
          livelink="sdfsdf"
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
