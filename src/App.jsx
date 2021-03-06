import "./scss/main.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import OpeningLoader from "./components/OpeningLoader";

// PAGES IMPORTS
import Home from "./pages/Home";
import Works from "./pages/Works";
import Experience from "./pages/Experience";
import Competences from "./pages/Competences";
import Formation from "./pages/Formation";
import PageNotFound from "./pages/PageNotFound";

// COMPONENTS IMPORTS
import Menu from "./components/Menu";

function App() {
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
      path: "/formation",
      component: (
        <Formation startAnimations={startContentAnimations}></Formation>
      ),
    },
    {
      key: 4,
      path: "/competences",
      component: <Competences startAnimations={startContentAnimations}></Competences>,
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
            <Menu startAnimations={startContentAnimations}></Menu>
            <Switch>
            {routesList.map((route) => {
              return (
                <Route key={route.key} exact path={route.path}>
                  {route.component}
                </Route>
              );
            })}
            <Route component={PageNotFound}></Route>
            </Switch>
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
