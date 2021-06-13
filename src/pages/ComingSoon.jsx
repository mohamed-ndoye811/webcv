import React, { useEffect } from "react";
import anime from "animejs";

const ComingSoon = (props) => {
  let particlesTable = [];
  let nbParticles = 50;

  for (let i = 0; i < nbParticles; i++) {
    particlesTable[i] = i;
  }

  let particles = particlesTable.map((particleNb) => (
    <div
      className="particle"
      style={{
        transform: "scale(" + Math.random() + ")",
        left: Math.floor(Math.random() * 100) + "vw",
        right: Math.floor(Math.random() * 100) + "vh",
      }}
      id={"particle" + particleNb}
    ></div>
  ));

  // Enter animation
  function loadEnterAnimation(duration) {
    let tl = anime.timeline({
      duration: duration,
      easing: "easeOutExpo",
    });

    tl.add({
      targets: ".title, .text",
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(100),
    });
  }

  // Particles animation
  function particlesAnimation() {
    anime({
      targets: ".particlesContainer > *",
      opacity: [0, 0.4, 0],
      translateX: function () {
        return [0, anime.random(-500, 500) + "%"];
      },
      translateY: function () {
        return [0, anime.random(-500, 500) + "%"];
      },
      delay: anime.stagger(25),
      duration: 5000,
      direction: "alternate",
      easing: "linear",
      loop: true,
    });
  }

  // On mount event
  useEffect(() => {
    if (props.startAnimations) {
      anime({
        targets: ".container",
        opacity: [0, 1],
      });
      loadEnterAnimation(1000);

      particlesAnimation();
    } else {
      anime({
        targets: ".container",
        opacity: [0, 0],
      });
    }
  }, [props.startAnimations]);

  return (
    <main className="comingSoonPage">
      <div className="container">
        <div className="textContent">
          <h2 className="title">WORK IN PROGRESS</h2>
          <br />
          <p className="text">
            Hey, Mohamed from the past speaking to you! <br />
            Just a quick message to talk about this page. Unfortunately, there
            is no content yet on the page. Mohamed is still working on it. So
            for now all I have to say is welcome to this temporary page and
            check this page time to time. Mohamed form the present will probably
            update this as soon as he finish with the content. <br />
          </p>
          <br />
          <p className="text">See You!</p>
        </div>
        <div className="particlesContainer">{particles}</div>
      </div>
    </main>
  );
};

export default ComingSoon;
