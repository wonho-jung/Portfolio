import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>myLogo</HeaderLeft>
      <HeaderRight>
        <ul>
          <li>About()</li>
          <li>Project()</li>

          <li>Contact()</li>

          <li>
            <button>Resume</button>
          </li>
        </ul>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;
`;
const HeaderLeft = styled.div``;
const HeaderRight = styled.div`
  ul {
    display: flex;
    list-style: none;
  }
`;
