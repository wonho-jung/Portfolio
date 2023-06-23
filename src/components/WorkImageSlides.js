import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import decibelLandingPage from "../assets/decibel-landingpage.png";
import decibelDashboard from "../assets/decibel-dashboards.png";
import decibelDetails from "../assets/decibel-detail.png";
import decibelCampaignDetails from "../assets/decibel-campaignDetailStep.png";
import decibelAudioAdStep from "../assets/decibel-audioAdStep.png";
import decibelBannerStep from "../assets/decibel-bannerStep.png";

const WorkImageSlides = () => {
  const images = [
    decibelLandingPage,
    decibelDashboard,
    decibelDetails,
    decibelCampaignDetails,
    decibelAudioAdStep,
    decibelBannerStep,
  ];
  return (
    <Slide>
      {images.map((each, index) => (
        <div key={index} className="each-slide-effect">
          <div>
            <img
              style={{ width: "100%", height: "100%" }}
              src={each}
              alt="work-slide"
            />
          </div>
        </div>
      ))}
      {/* <div className="each-slide-effect">
        <div>
          <img
            style={{ width: "100%", height: "100%" }}
            src={decibelLandingPage}
            alt=""
          />
        </div>
      </div> */}
    </Slide>
  );
};

export default WorkImageSlides;
