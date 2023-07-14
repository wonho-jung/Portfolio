import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import resume from "../assets/sam_CV_0711.pdf";
import { useEffect } from "react";
import { ReactComponent as Logo } from "../assets/newlogo.svg";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [nav, setNav] = useState("transparent");

  const scroll = () => {
    if (window.scrollY > 200) {
      setNav("#1e2a3a");
    } else {
      setNav("transparent");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <HeaderContainer style={{ backgroundColor: nav, transition: "0.5s" }}>
      <HeaderLeft>
        <Logo style={{ width: "180px" }} />
      </HeaderLeft>
      <HeaderRight>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a
              className="nav-link nav-link-ltr"
              href="/#about"
              rel="noreferrer"
              onClick={closeMobileMenu}
            >
              About<span>()</span>
            </a>
          </li>
          <li>
            <a
              className="nav-link nav-link-ltr"
              href="/#project"
              onClick={closeMobileMenu}
            >
              Projects<span>()</span>
            </a>
          </li>

          <li>
            <a
              className="nav-link nav-link-ltr"
              href="/#contact"
              onClick={closeMobileMenu}
            >
              Contact<span>()</span>
            </a>
          </li>

          <li>
            <Button className="resumeBTN" onClick={closeMobileMenu}>
              <a href={resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </Button>
          </li>
        </ul>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  z-index: 100;
  padding: 0 30px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 961px) {
    position: fixed;
    justify-content: space-between;
  }
`;
const HeaderLeft = styled.div`
  .logo {
    width: 100px;
    opacity: 0.7;
    :hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 960px) {
    .logo {
      opacity: 1;
    }
  }
`;
const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    .menu-icon {
      position: fixed;
      display: block !important;
      cursor: pointer;
      right: 30px;
      top: 50px;
      transform: translate(-5%, -50%);
      z-index: 2;
    }
    .nav-menu {
      position: fixed;
      top: 0;
      right: 0;
      background: #1e2a3a;
      height: 100vh;
      width: 70%;
      justify-content: center;
      flex-direction: column;
      -webkit-clip-path: circle(100px at 90% -60%);
      clip-path: circle(100px at 90% -60%);
      transition: all 1.5s ease-out;
      pointer-events: none;
      z-index: 1;

      li {
        padding-left: 0;
        opacity: 1;
        padding-bottom: 20px;
      }
    }

    .nav-menu.active {
      -webkit-clip-path: circle(1200px at 90% -10%);
      clip-path: circle(1200px at 90% -10%);
      pointer-events: all;

      background: #1e2a3a;
      li {
        padding-left: 0;
        opacity: 1;
        padding-bottom: 20px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }
  li {
    padding-left: 30px;
    font-size: 16px;
    position: relative;
  }
  .nav-link::before {
    transition: 300ms;
    height: 3px;
    content: "";
    position: absolute;
    background-color: #54b689;
    width: 0%;
    top: 20px;
  }
  .nav-link-ltr:hover::before {
    width: 60px;
  }

  li > a {
    text-decoration: none;
    color: #eeeeee;
    opacity: 0.7;
    > span {
      margin-left: 3px;
      color: #54b689 !important;
    }
    :hover {
      color: #54b689;
      opacity: 1;
    }
  }
  li > button {
    padding: 5px;
    font-size: 12px;
    opacity: 0.7;
    margin: 0;
    color: #eeeeee;
    border: 1px solid #54b689;
    :hover {
      opacity: 1;
      background-color: rgba(84, 182, 137, 0.3);
    }
  }
  .menu-icon {
    display: none;
  }
  .MuiSvgIcon-root {
    color: #54b689;
    opacity: 1;
  }
`;
