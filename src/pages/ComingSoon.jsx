import React, { useEffect } from "react";
import anime from "animejs";

// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.querySelector(".particles").createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

const ComingSoon = (props) => {
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

  useEffect(() => {
    if (props.startAnimations) {
      anime({
        targets: ".container",
        opacity: [0, 1],
      });
      loadEnterAnimation(1000);
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
        <div className="particles"></div>
      </div>
    </main>
  );
};

export default ComingSoon;
