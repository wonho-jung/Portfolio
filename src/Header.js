import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>myLogo</HeaderLeft>
      <HeaderRight>
        <ul>
          <li>01. About</li>
          <li>02. Project</li>

          <li>03. Contact </li>

          <li>
            <button>Resume</button>
          </li>
        </ul>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div``;
const HeaderLeft = styled.div``;
const HeaderRight = styled.div``;
