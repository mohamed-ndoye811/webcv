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
    }, 1000);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {opnLoadDisplay ? (
        <OpeningLoader
          finishedToggle={opnLoadToggle}
          startPageAnimation={startContentAnimationsToggle}
        ></OpeningLoader>
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
