import "./scss/main.scss";
import React, { useState, useEffect } from "react";

import OpeningLoader from "./components/OpeningLoader";

import ComingSoon from "./pages/ComingSoon";

function App() {
  // States definitions
  const [opnLoadDisplay, setopnLoadDisplay] = useState(true); // The state of the opening Loader
  const [pageContentDisplay, setpageContentDisplay] = useState(false);
  const [startContentAnimations, setStartContentAnimations] = useState(false);

  // Opening Loader display toggle
  const opnLoadToggle = () => {
    setopnLoadDisplay(false);
  };

  const pageContentDisplayToggle = () => {
    setpageContentDisplay(true);
  };

  useEffect(() => {
    setTimeout(() => {
      pageContentDisplayToggle();
      setStartContentAnimations(true);
    }, 1000);
  }, []);

  return (
    <>
      {opnLoadDisplay ? (
        <OpeningLoader finishedToggle={opnLoadToggle}></OpeningLoader>
      ) : (
        ""
      )}
      {pageContentDisplay ? (
        <ComingSoon startAnimations={startContentAnimations}></ComingSoon>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
