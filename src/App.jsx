import "./scss/main.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import OpeningLoader from "./components/OpeningLoader";

// PAGES IMPORTS
import Home from "./pages/Home";
import Works from "./pages/Works";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Education from "./pages/Education";

// COMPONENTS IMPORTS
import Menu from "./components/Menu";
import ComingSoon from "./pages/ComingSoon";

function App() {
  var windowWidth = window.innerWidth;

  // States definitions
  const [opnLoadDisplay, setopnLoadDisplay] = useState(true); // The state of the opening Loader
  const [pageContentDisplay, setpageContentDisplay] = useState(false);
  const [startContentAnimations, setStartContentAnimations] = useState(false);

  // Opening Loader display toggle
  const opnLoadToggle = () => {
    setopnLoadDisplay(!opnLoadDisplay);
  };

  const pageContentDisplayToggle = () => {
    setpageContentDisplay(!pageContentDisplay);
  };

  const startContentAnimationsToggle = () => {
    setStartContentAnimations(!startContentAnimations);
  };

  useEffect(() => {
    setTimeout(() => {
      pageContentDisplayToggle();
    }, 1200);
    // eslint-disable-next-line
  }, []);

  let routesList = [
    {
      key: 1,
      path: "/",
      component: <Home startAnimations={startContentAnimations}></Home>,
    },
    {
      key: 2,
      path: "/work",
      component: <Works startAnimations={startContentAnimations}></Works>,
    },
    {
      key: 3,
      path: "/education",
      component: (
        <Education startAnimations={startContentAnimations}></Education>
      ),
    },
    {
      key: 4,
      path: "/skills",
      component: <Skills startAnimations={startContentAnimations}></Skills>,
    },
    {
      key: 5,
      path: "/experience",
      component: (
        <Experience startAnimations={startContentAnimations}></Experience>
      ),
    },
  ];

  return (
    <>
      <BrowserRouter>
        {opnLoadDisplay ? (
          <OpeningLoader
            finishedToggle={opnLoadToggle}
            startPageAnimation={startContentAnimationsToggle}
          ></OpeningLoader>
        ) : null}
        {pageContentDisplay ? (
          <>
            {windowWidth < 1024 ? (
              <ComingSoon />
            ) : (
              <>
                <Menu startAnimations={startContentAnimations}></Menu>
                {routesList.map((route) => {
                  return (
                    <Route key={route.key} exact path={route.path}>
                      {route.component}
                    </Route>
                  );
                })}
              </>
            )}
          </>
        ) : (
          ""
        )}
      </BrowserRouter>
      <div className="websiteBackground"></div>
    </>
  );
}

export default App;
