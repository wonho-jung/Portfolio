import { Button } from "@material-ui/core";
import React, { useState } from "react";
import reactDom from "react-dom";
import styled from "styled-components";
import SideProject from "./SideProject";

function OtherProject() {
  const [btnState, setBtnState] = useState("More");
  const [blockDiv, setBlockDiv] = useState("none");

  const handleBtn = () => {
    if (btnState === "More") {
      setBtnState("Less");
      setBlockDiv("block");
    } else {
      setBtnState("More");
      setBlockDiv("none");
    }
  };
  return (
    <OtherProjectContanier>
      <h1>
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
      </OtherProjectContent>
    </OtherProjectContanier>
  );
}

export default OtherProject;

const OtherProjectContanier = styled.div`
  height: 100%;

  margin-top: 100px;
`;

const OtherProjectContent = styled.div`
  display: grid;
  justify-content: center;
  button {
    border: 1px solid #54b689;
    margin: 0 auto;
    width: 50px;
    padding: 10px;
    color: #eeeeee;
    :hover {
      background-color: #54b689;
    }
  }
`;
const MoreProject = styled.div``;
