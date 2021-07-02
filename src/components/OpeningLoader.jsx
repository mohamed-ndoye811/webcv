import React, { useEffect } from "react";
import anime from "animejs";

export default function OpeningLoader(props) {
  //-----[ ENTER ANIMATIONS ]-----
  /**
   * Backgrounds [Enter and Exit] animation timeline
   */
  function backgroundEnterAnimation(duration) {
    let tl = anime.timeline({
      duration: duration,
      easing: "easeInOutExpo",
    });

    tl.add({
      targets: ".leftSide",
      translateY: ["-100%", 0],
    });

    tl.add(
      {
        targets: ".rightSide",
        translateY: ["100%", 0],
      },
      "-=" + duration
    );
  }

  function backgroundExitAnimation(duration, delay) {
    let tl = anime.timeline({
      duration: duration,
      easing: "easeInOutQuart",
    });

    if (window.screen.width < 1366) {
      tl.add({
        targets: "#leftSide",
        height: ["100%", 0],
        delay: delay,
      });
    } else {
      tl.add({
        targets: "#leftSide",
        width: ["100%", 0],
        delay: delay,
      });
    }

    tl.finished.then(() => {
      props.finishedToggle();
      props.startPageAnimation();
    });
  }

  /**
   * Text letters [Enter and Exit] animations timeline
   */
  function letterEnterAnimation(duration) {
    let tl = anime.timeline({
      easing: "easeOutExpo",
      delay: anime.stagger(30),
      duration: duration,
    });

    tl.add(
      {
        targets: ".leftSide .letter",
        translateY: [500, 0],
      },
      "+=" + duration * 0.2
    );

    tl.add(
      {
        targets: ".rightSide .letter",
        translateY: [-500, 0],
      },
      "-=" + duration
    );
  }

  function letterExitAnimation(duration) {
    let tl = anime.timeline({
      easing: "easeInExpo",
      delay: anime.stagger(30),
      duration: duration,
    });

    tl.add({
      targets: ".leftSide .letter",
      translateY: [0, -500],
      complete: () => {
        anime({
          targets: ".letter",
          opacity: 0,
        });
      },
    });

    tl.add(
      {
        targets: ".rightSide .letter",
        translateY: [0, 500],
        complete: () => {
          anime({
            targets: ".letter",
            opacity: 0,
          });
        },
      },
      "-=" + duration
    );
  }

  /**
   * useEffect launched when the component is mounted
   */
  useEffect(() => {
    let enterAnimationsDuration = 1200;

    backgroundEnterAnimation(enterAnimationsDuration); //We launch the backgrounds animations

    // after a little delay we launch the text animation
    letterEnterAnimation(enterAnimationsDuration * 1.2);

    // For the opening loader animation, the exit trigger with a simple timeout for now
    // TODO: Replace the trigger with the loading of the content
    setTimeout(() => {
      letterExitAnimation(1200); //we make the letters disappear
      backgroundExitAnimation(800, 1200); //and then we launch the exitAnimation of the backgrounds
    }, 1800);
    // eslint-disable-next-line
  }, []);

  return (
    <div id="openingLoader">
      <div className="side" id="leftSide">
        <div className="leftSide">
          <div className="textContainer">
            <div className="letter">M</div>
            <div className="letter">O</div>
            <div className="letter">H</div>
            <div className="letter">A</div>
            <div className="letter">M</div>
            <div className="letter">E</div>
            <div className="letter">D</div>
          </div>
        </div>
      </div>
      <div className="side" id="rightSide">
        <div className="rightSide">
          <div className="textContainer">
            <div className="letter">N</div>
            <div className="letter">D</div>
            <div className="letter">O</div>
            <div className="letter">Y</div>
            <div className="letter">E</div>
          </div>
        </div>
      </div>
    </div>
  );
}
