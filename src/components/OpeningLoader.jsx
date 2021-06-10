import React, { useEffect } from "react";
import anime from "animejs";

export default function OpeningLoader() {
  function enterBackgroundAnimation() {
    anime({
      targets: ".leftSide",
      duration: 1800,
      easing: "easeInOutExpo",
      translateY: ["-100%", 0],
    });

    anime({
      targets: ".rightSide",
      duration: 1800,
      easing: "easeInOutExpo",
      translateY: ["100%", 0],
    });
  }

  function letterAnimation() {
    let timeline = anime.timeline({
      easing: "easeOutExpo",
      delay: anime.stagger(30),
    });

    timeline.add({
      targets: ".leftSide .letter",
      translateY: [500, 0],
      duration: 1800,
    });

    timeline.add(
      {
        targets: ".rightSide .letter",
        translateY: [-500, 0],
        duration: 1800,
      },
      "-=1800"
    );
  }

  useEffect(() => {
    enterBackgroundAnimation();

    setTimeout(() => {
      letterAnimation();
    }, 1000);
  }, []);

  return (
    <div id="openingLoader">
      <div className="side leftSide">
        <div className="text">
          <div className="letter">M</div>
          <div className="letter">O</div>
          <div className="letter">H</div>
          <div className="letter">A</div>
          <div className="letter">M</div>
          <div className="letter">E</div>
          <div className="letter">D</div>
        </div>
      </div>
      <div className="side rightSide">
        <div className="text">
          <div className="letter">N</div>
          <div className="letter">D</div>
          <div className="letter">O</div>
          <div className="letter">Y</div>
          <div className="letter">E</div>
        </div>
      </div>
    </div>
  );
}
