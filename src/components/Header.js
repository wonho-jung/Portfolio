import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import resume from "../assets/WonhoJung_CV_Final.pdf";
import { useEffect } from "react";
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
        <svg
          className="logo"
          width="660"
          height="120"
          viewBox="0 0 660 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1"
            maskUnits="userSpaceOnUse"
            x="0.0234375"
            y="0"
            width="660"
            height="120"
            fill="black"
          >
            <rect fill="white" x="0.0234375" width="660" height="120" />
            <path d="M81.2031 95.0703L95.8281 36.9219H108.836L86.6875 113H76.1406L57.6484 55.3438L39.6484 113H29.1016L7.02344 36.9219H19.9609L34.9375 93.875L52.6562 36.9219H63.1328L81.2031 95.0703Z" />
            <path d="M118.68 74.2578C118.68 66.8047 120.133 60.1016 123.039 54.1484C125.992 48.1953 130.07 43.6016 135.273 40.3672C140.523 37.1328 146.5 35.5156 153.203 35.5156C163.562 35.5156 171.93 39.1016 178.305 46.2734C184.727 53.4453 187.938 62.9844 187.938 74.8906V75.8047C187.938 83.2109 186.508 89.8672 183.648 95.7734C180.836 101.633 176.781 106.203 171.484 109.484C166.234 112.766 160.188 114.406 153.344 114.406C143.031 114.406 134.664 110.82 128.242 103.648C121.867 96.4766 118.68 86.9844 118.68 75.1719V74.2578ZM131.758 75.8047C131.758 84.2422 133.703 91.0156 137.594 96.125C141.531 101.234 146.781 103.789 153.344 103.789C159.953 103.789 165.203 101.211 169.094 96.0547C172.984 90.8516 174.93 83.5859 174.93 74.2578C174.93 65.9141 172.938 59.1641 168.953 54.0078C165.016 48.8047 159.766 46.2031 153.203 46.2031C146.781 46.2031 141.602 48.7578 137.664 53.8672C133.727 58.9766 131.758 66.2891 131.758 75.8047Z" />
            <path d="M216.555 36.9219L216.977 46.4844C222.789 39.1719 230.383 35.5156 239.758 35.5156C255.836 35.5156 263.945 44.5859 264.086 62.7266V113H251.078V62.6562C251.031 57.1719 249.766 53.1172 247.281 50.4922C244.844 47.8672 241.023 46.5547 235.82 46.5547C231.602 46.5547 227.898 47.6797 224.711 49.9297C221.523 52.1797 219.039 55.1328 217.258 58.7891V113H204.25V36.9219H216.555Z" />
            <path d="M283.984 106.18C283.984 103.93 284.641 102.055 285.953 100.555C287.312 99.0547 289.328 98.3047 292 98.3047C294.672 98.3047 296.688 99.0547 298.047 100.555C299.453 102.055 300.156 103.93 300.156 106.18C300.156 108.336 299.453 110.141 298.047 111.594C296.688 113.047 294.672 113.773 292 113.773C289.328 113.773 287.312 113.047 285.953 111.594C284.641 110.141 283.984 108.336 283.984 106.18Z" />
            <path d="M370.188 68C367.469 71.2344 364.211 73.8359 360.414 75.8047C356.664 77.7734 352.539 78.7578 348.039 78.7578C342.133 78.7578 336.977 77.3047 332.57 74.3984C328.211 71.4922 324.836 67.4141 322.445 62.1641C320.055 56.8672 318.859 51.0312 318.859 44.6562C318.859 37.8125 320.148 31.6484 322.727 26.1641C325.352 20.6797 329.055 16.4844 333.836 13.5781C338.617 10.6719 344.195 9.21875 350.57 9.21875C360.695 9.21875 368.664 13.0156 374.477 20.6094C380.336 28.1562 383.266 38.4688 383.266 51.5469V55.3438C383.266 75.2656 379.328 89.8203 371.453 99.0078C363.578 108.148 351.695 112.836 335.805 113.07H333.273V102.102H336.016C346.75 101.914 355 99.125 360.766 93.7344C366.531 88.2969 369.672 79.7188 370.188 68ZM350.148 68C354.508 68 358.516 66.6641 362.172 63.9922C365.875 61.3203 368.57 58.0156 370.258 54.0781V48.875C370.258 40.3438 368.406 33.4062 364.703 28.0625C361 22.7188 356.312 20.0469 350.641 20.0469C344.922 20.0469 340.328 22.25 336.859 26.6562C333.391 31.0156 331.656 36.7812 331.656 43.9531C331.656 50.9375 333.32 56.7031 336.648 61.25C340.023 65.75 344.523 68 350.148 68Z" />
            <path d="M435.086 74.3281C435.086 62.6562 437.852 53.2812 443.383 46.2031C448.914 39.0781 456.156 35.5156 465.109 35.5156C474.016 35.5156 481.07 38.5625 486.273 44.6562V5H499.281V113H487.328L486.695 104.844C481.492 111.219 474.25 114.406 464.969 114.406C456.156 114.406 448.961 110.797 443.383 103.578C437.852 96.3594 435.086 86.9375 435.086 75.3125V74.3281ZM448.094 75.8047C448.094 84.4297 449.875 91.1797 453.438 96.0547C457 100.93 461.922 103.367 468.203 103.367C476.453 103.367 482.477 99.6641 486.273 92.2578V57.3125C482.383 50.1406 476.406 46.5547 468.344 46.5547C461.969 46.5547 457 49.0156 453.438 53.9375C449.875 58.8594 448.094 66.1484 448.094 75.8047Z" />
            <path d="M551.102 114.406C540.789 114.406 532.398 111.031 525.93 104.281C519.461 97.4844 516.227 88.4141 516.227 77.0703V74.6797C516.227 67.1328 517.656 60.4062 520.516 54.5C523.422 48.5469 527.453 43.9062 532.609 40.5781C537.812 37.2031 543.438 35.5156 549.484 35.5156C559.375 35.5156 567.062 38.7734 572.547 45.2891C578.031 51.8047 580.773 61.1328 580.773 73.2734V78.6875H529.234C529.422 86.1875 531.602 92.2578 535.773 96.8984C539.992 101.492 545.336 103.789 551.805 103.789C556.398 103.789 560.289 102.852 563.477 100.977C566.664 99.1016 569.453 96.6172 571.844 93.5234L579.789 99.7109C573.414 109.508 563.852 114.406 551.102 114.406ZM549.484 46.2031C544.234 46.2031 539.828 48.125 536.266 51.9688C532.703 55.7656 530.5 61.1094 529.656 68H567.766V67.0156C567.391 60.4062 565.609 55.2969 562.422 51.6875C559.234 48.0312 554.922 46.2031 549.484 46.2031Z" />
            <path d="M620.008 95.3516L638.852 36.9219H652.141L624.859 113H614.945L587.383 36.9219H600.672L620.008 95.3516Z" />
          </mask>
          <path
            d="M81.2031 95.0703L95.8281 36.9219H108.836L86.6875 113H76.1406L57.6484 55.3438L39.6484 113H29.1016L7.02344 36.9219H19.9609L34.9375 93.875L52.6562 36.9219H63.1328L81.2031 95.0703Z"
            stroke="#54B689"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M118.68 74.2578C118.68 66.8047 120.133 60.1016 123.039 54.1484C125.992 48.1953 130.07 43.6016 135.273 40.3672C140.523 37.1328 146.5 35.5156 153.203 35.5156C163.562 35.5156 171.93 39.1016 178.305 46.2734C184.727 53.4453 187.938 62.9844 187.938 74.8906V75.8047C187.938 83.2109 186.508 89.8672 183.648 95.7734C180.836 101.633 176.781 106.203 171.484 109.484C166.234 112.766 160.188 114.406 153.344 114.406C143.031 114.406 134.664 110.82 128.242 103.648C121.867 96.4766 118.68 86.9844 118.68 75.1719V74.2578ZM131.758 75.8047C131.758 84.2422 133.703 91.0156 137.594 96.125C141.531 101.234 146.781 103.789 153.344 103.789C159.953 103.789 165.203 101.211 169.094 96.0547C172.984 90.8516 174.93 83.5859 174.93 74.2578C174.93 65.9141 172.938 59.1641 168.953 54.0078C165.016 48.8047 159.766 46.2031 153.203 46.2031C146.781 46.2031 141.602 48.7578 137.664 53.8672C133.727 58.9766 131.758 66.2891 131.758 75.8047Z"
            stroke="#54B689"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M216.555 36.9219L216.977 46.4844C222.789 39.1719 230.383 35.5156 239.758 35.5156C255.836 35.5156 263.945 44.5859 264.086 62.7266V113H251.078V62.6562C251.031 57.1719 249.766 53.1172 247.281 50.4922C244.844 47.8672 241.023 46.5547 235.82 46.5547C231.602 46.5547 227.898 47.6797 224.711 49.9297C221.523 52.1797 219.039 55.1328 217.258 58.7891V113H204.25V36.9219H216.555Z"
            stroke="#54B689"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M283.984 106.18C283.984 103.93 284.641 102.055 285.953 100.555C287.312 99.0547 289.328 98.3047 292 98.3047C294.672 98.3047 296.688 99.0547 298.047 100.555C299.453 102.055 300.156 103.93 300.156 106.18C300.156 108.336 299.453 110.141 298.047 111.594C296.688 113.047 294.672 113.773 292 113.773C289.328 113.773 287.312 113.047 285.953 111.594C284.641 110.141 283.984 108.336 283.984 106.18Z"
            stroke="#54B689"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M370.188 68C367.469 71.2344 364.211 73.8359 360.414 75.8047C356.664 77.7734 352.539 78.7578 348.039 78.7578C342.133 78.7578 336.977 77.3047 332.57 74.3984C328.211 71.4922 324.836 67.4141 322.445 62.1641C320.055 56.8672 318.859 51.0312 318.859 44.6562C318.859 37.8125 320.148 31.6484 322.727 26.1641C325.352 20.6797 329.055 16.4844 333.836 13.5781C338.617 10.6719 344.195 9.21875 350.57 9.21875C360.695 9.21875 368.664 13.0156 374.477 20.6094C380.336 28.1562 383.266 38.4688 383.266 51.5469V55.3438C383.266 75.2656 379.328 89.8203 371.453 99.0078C363.578 108.148 351.695 112.836 335.805 113.07H333.273V102.102H336.016C346.75 101.914 355 99.125 360.766 93.7344C366.531 88.2969 369.672 79.7188 370.188 68ZM350.148 68C354.508 68 358.516 66.6641 362.172 63.9922C365.875 61.3203 368.57 58.0156 370.258 54.0781V48.875C370.258 40.3438 368.406 33.4062 364.703 28.0625C361 22.7188 356.312 20.0469 350.641 20.0469C344.922 20.0469 340.328 22.25 336.859 26.6562C333.391 31.0156 331.656 36.7812 331.656 43.9531C331.656 50.9375 333.32 56.7031 336.648 61.25C340.023 65.75 344.523 68 350.148 68Z"
            stroke="#54B689"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M435.086 74.3281C435.086 62.6562 437.852 53.2812 443.383 46.2031C448.914 39.0781 456.156 35.5156 465.109 35.5156C474.016 35.5156 481.07 38.5625 486.273 44.6562V5H499.281V113H487.328L486.695 104.844C481.492 111.219 474.25 114.406 464.969 114.406C456.156 114.406 448.961 110.797 443.383 103.578C437.852 96.3594 435.086 86.9375 435.086 75.3125V74.3281ZM448.094 75.8047C448.094 84.4297 449.875 91.1797 453.438 96.0547C457 100.93 461.922 103.367 468.203 103.367C476.453 103.367 482.477 99.6641 486.273 92.2578V57.3125C482.383 50.1406 476.406 46.5547 468.344 46.5547C461.969 46.5547 457 49.0156 453.438 53.9375C449.875 58.8594 448.094 66.1484 448.094 75.8047Z"
            stroke="#54B689"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M551.102 114.406C540.789 114.406 532.398 111.031 525.93 104.281C519.461 97.4844 516.227 88.4141 516.227 77.0703V74.6797C516.227 67.1328 517.656 60.4062 520.516 54.5C523.422 48.5469 527.453 43.9062 532.609 40.5781C537.812 37.2031 543.438 35.5156 549.484 35.5156C559.375 35.5156 567.062 38.7734 572.547 45.2891C578.031 51.8047 580.773 61.1328 580.773 73.2734V78.6875H529.234C529.422 86.1875 531.602 92.2578 535.773 96.8984C539.992 101.492 545.336 103.789 551.805 103.789C556.398 103.789 560.289 102.852 563.477 100.977C566.664 99.1016 569.453 96.6172 571.844 93.5234L579.789 99.7109C573.414 109.508 563.852 114.406 551.102 114.406ZM549.484 46.2031C544.234 46.2031 539.828 48.125 536.266 51.9688C532.703 55.7656 530.5 61.1094 529.656 68H567.766V67.0156C567.391 60.4062 565.609 55.2969 562.422 51.6875C559.234 48.0312 554.922 46.2031 549.484 46.2031Z"
            stroke="#54B689"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M620.008 95.3516L638.852 36.9219H652.141L624.859 113H614.945L587.383 36.9219H600.672L620.008 95.3516Z"
            stroke="#54B689"
            strokeWidth="10"
            mask="url(#path-1-outside-1)"
          />
        </svg>
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
              Project<span>()</span>
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
              <a href={resume} target="_blank">
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
