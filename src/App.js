import { React, useEffect } from "react";
import { gsap, Expo } from "gsap";

// COMPONENTS IMPORT
import Infos from "./components/Infos";

// Styles
import "./App.css";

function App() {
  var tl = gsap.timeline();

  function logoAnimation() {
    tl.from("#logo_M", 1, {
      x: -100,
      opacity: 0,
      ease: Expo.easeInOut,
    }).from(
      "#logo_N",
      1,
      {
        x: 100,
        opacity: 0,
        ease: Expo.easeInOut,
      },
      "-=1"
    );
  }

  function sliderOut() {
    tl.to([".slider-bg1", ".slider-bg2", ".slider-bg3"], 1.2, {
      y: "-100%",
      stagger: 0.1,
      ease: Expo.easeInOut,
    }).to(".sliderLogo", 0.1, { opacity: 0 }, "-=0.6");
  }

  useEffect(() => {
    logoAnimation();

    setTimeout(() => {
      sliderOut();
    }, 3000);
  });

  return (
    <>
      <div className="slider">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 2000 1115"
          className="sliderLogo"
        >
          <g id="logo_N">
            <polygon
              points="1945.3,53.2 1724.6,53.2 1506.4,854 1444,854 1444,854 1603.6,268.6 1603.6,268.6 1662.8,53.4 1159.3,53.3 
                1100.7,266.6 1100.7,266.6 882,1069 1102.6,1069 1320.9,268.6 1320.9,268.6 1382.9,268.6 1223,855.2 1223.1,855 1223.1,855 
                1164.2,1069.2 1384.9,1069.2 1667.7,1069.2 1726.4,855.6 1726.5,855.6 	"
            />
          </g>
          <g id="logo_M">
            <polygon
              points="1101.6,53.4 328.2,53.3 269.5,266.6 269.5,266.6 269,268.5 269,268.6 269,268.6 50.8,1069 271.4,1069 489.7,268.6 
                489.7,268.6 543.4,268.6 325.3,1069 545.9,1069 764.2,268.6 821.9,268.6 822.3,268.6 604.1,1069 824.7,1069 1043.6,266.6 
                1043.5,266.6 	"
            />
          </g>
        </svg>
        <div className="slider-bg3 slider"></div>
        <div className="slider-bg2 slider"></div>
        <div className="slider-bg1 slider"></div>
      </div>

      <div className="hub-container">
        <div className="left-container">
          <Infos />
        </div>
        <div className="right-container">rbeb</div>
      </div>
    </>
  );
}

export default App;
