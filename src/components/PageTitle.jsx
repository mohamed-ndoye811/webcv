import { React, useEffect } from "react";
import anime from "animejs";

export default function PageTitle(props) {
  var title = props.title.split("");

  useEffect(() => {
    setTimeout(() => {
      anime({
        targets: ".titleLetters",
        translateY: [-150, 0],
        delay: anime.stagger(50),
        easing: "easeOutQuint",
        duration: 1000,
      });
    }, 1500);
  });

  return (
    <h1 className="pageTitle">
      {title.map((letter) => {
        return <span className="titleLetters">{letter}</span>;
      })}
    </h1>
  );
}
