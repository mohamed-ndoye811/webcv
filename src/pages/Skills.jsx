import { React, useEffect } from "react";
import anime from "animejs";

//---- Component imports
import PageTitle from "../components/PageTitle";

//---- Utils imports

export default function Skills(props) {
  let languages = [
    {
      key: 1,
      img: "c_plus",
      name: "C++",
    },
    {
      key: 2,
      img: "c_sharp",
      name: "C#",
    },
    {
      key: 3,
      img: "css",
      name: "CSS3",
    },
    {
      key: 4,
      img: "html",
      name: "HTML5",
    },
    {
      key: 5,
      img: "js",
      name: "JavaScript",
    },
    {
      key: 6,
      img: "reactjs",
      name: "React",
    },
    {
      key: 7,
      img: "ruby",
      name: "Ruby",
    },
    {
      key: 8,
      img: "svelte",
      name: "Svelte",
    },
  ];

  function loadEnterAnimation(duration) {
    let tl = anime.timeline({
      easing: "easeOutQuint",
      duration: duration,
    });

    tl.add({
      targets: ".plIcons",
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(50),
    });
  }

  function hoverAnimation(target) {
    anime({
      targets: target,
      rotate: [0, "360deg"],
      scale: [1, 1.2],
      duration: 600,
      easing: "easeOutExpo",
    });
  }

  useEffect(() => {
    if (props.startAnimations) {
      anime({
        targets: ".container",
        opacity: 0,
      });

      setTimeout(() => {
        anime({
          targets: ".container",
          opacity: [0, 1],
        });
        loadEnterAnimation(1200);
      }, 800);
    } else {
      anime({
        targets: ".container",
        opacity: [0, 0],
      });
    }
  });

  return (
    <>
      <PageTitle title="Skills" />
      <main className="skillsPage">
        <div className="container skillsContainer">
          <div className="plIconsContainer">
            {languages.map((language, key) => {
              return (
                <div className="plIcons" key={language.key}>
                  <img
                    src={"./img/programming-languages/" + language.img + ".svg"}
                    alt={language.name + " icon"}
                    onMouseOver={(target) => {
                      console.log(target.target);
                      hoverAnimation(target.target);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
