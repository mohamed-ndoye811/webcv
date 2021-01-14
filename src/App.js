import { React, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { gsap, Power4 } from "gsap";
import { CSSTransition } from "react-transition-group";
import $ from "jquery";

// COMPONENTS IMPORT
import Infos from "./components/Infos";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

// Styles
import "./styles/App.css";

function App() {
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
  ];

  const [loadingEnded, setLoadingEnded] = useState(false);

  var tl = gsap.timeline();

  function logoAnimation() {
    tl.from("#logo_M", 1, {
      x: -100,
      opacity: 0,
      ease: Power4.easeInOut,
    }).from(
      "#logo_N",
      1,
      {
        x: 100,
        opacity: 0,
        ease: Power4.easeInOut,
      },
      "-=1"
    );
  }

  function sliderOut() {
    tl.to([".slider-bg1", ".slider-bg2", ".slider-bg3"], 1.2, {
      y: "-100%",
      stagger: 0.1,
      ease: Power4.easeInOut,
    }).to(
      ".sliderLogo",
      0.1,
      {
        opacity: 0,
        onStart: () => {
          setLoadingEnded(true);
        },
      },
      "-=0.6"
    );

    setTimeout(() => {
      $(".slider").hide();
    }, 1800);
  }

  useEffect(() => {
    logoAnimation();

    setInterval(() => {
      sliderOut();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEnter = (node) => {
    // Entering animation
    gsap.from(node.children, 0.6, {
      y: 30,
      delay: 0.6,
      opacity: 0,
      ease: Power4.easeInOut,
      stagger: 0.2,
    });
  };

  const onExit = (node) => {
    // Exiting animation
    gsap.to(node.children, 0.6, {
      y: -50,
      opacity: 0,
      ease: Power4.easeInOut,
      stagger: 0.2,
    });
  };

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
            <polygon points="1945.3,53.2 1724.6,53.2 1506.4,854 1444,854 1444,854 1603.6,268.6 1603.6,268.6 1662.8,53.4 1159.3,53.3 1100.7, 266.6 1100.7, 266.6 882, 1069 1102.6, 1069 1320.9, 268.6 1320.9, 268.6 1382.9, 268.6 1223, 855.2 1223.1, 855 1223.1, 855 1164.2, 1069.2 1384.9, 1069.2 1667.7, 1069.2 1726.4, 855.6 1726.5, 855.6 " />
          </g>
          <g id="logo_M">
            <polygon points="1101.6,53.4 328.2,53.3 269.5,266.6 269.5,266.6 269,268.5 269,268.6 269,268.6 50.8,1069 271.4,1069 489.7,268.6 489.7, 268.6 543.4, 268.6 325.3, 1069 545.9, 1069 764.2, 268.6 821.9, 268.6 822.3, 268.6 604.1, 1069 824.7, 1069 1043.6, 266.6 1043.5, 266.6" />
          </g>
        </svg>
        <div className="slider-bg3 slider"> </div>
        <div className="slider-bg2 slider"> </div>
        <div className="slider-bg1 slider"> </div>
      </div>

      <div className="hub-container">
        <div className="left-container">
          <Infos loadingEnded={loadingEnded} />
        </div>

        <div className="right-container">
          <Header loadingEnded={loadingEnded} />
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} exact>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={800}
                  onExit={onExit}
                  onEntering={onEnter}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
