import { React, useEffect } from "react";
import anime from "animejs";

//---- Component imports
import PageTitle from "../components/PageTitle";
import Icon from "../components/Icon";

//---- Utils imports

export default function Competences(props) {
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

    if (window.screen.width <= 768) {
      // Global language card text animation
      tl.add(
        {
          targets: ".iconName",
          opacity: [0, 1],
          translateY: [-30, 5],
          skewY: [-25, 0],
          delay: anime.stagger(75),
        },
        "-=1500"
      );
    }
  }

  function hoverEnterAnimation(target) {
    let tl = anime.timeline({
      duration: 800,
      easing: "easeOutExpo",
    });
    // Global language card scale animation
    tl.add({
      targets: target,
      scale: 1.3,
    });

    // Global language card text animation
    tl.add(
      {
        targets: target.children[1],
        opacity: [0, 1],
        translateY: [-30, 0],
      },
      "-=800"
    );
  }

  function hoverLeaveAnimation(target) {
    let tl = anime.timeline({
      duration: 800,
      easing: "easeOutExpo",
    });
    // Global language card scale animation
    tl.add({
      targets: target,
      scale: 0.8,
    });

    // Global language card text animation
    tl.add(
      {
        targets: target.children[1],
        opacity: 0,
        translateY: -30,
      },
      "-=800"
    );
  }

  useEffect(() => {
    anime({
      targets: ".container, .pageTitle",
      opacity: [0, 0],
    });

    if (props.startAnimations) {
      setTimeout(() => {
        anime({
          targets: ".container",
          opacity: [0, 1],
        });

        anime({
          targets: ".pageTitle",
          opacity: [0, 0.2],
        });
        loadEnterAnimation(1200);
      }, 800);
    }
  });

  return (
    <>
      <main className="skillsPage">
        <PageTitle title="Competences" />
        <div className="container skillsContainer">
          <div className="plIconsContainer">
            {languages.map((language, key) => {
              return (
                <div
                  className="plIcons"
                  key={language.key}
                  onMouseEnter={(target) => {
                    console.log(target.target.children[1]);
                    hoverEnterAnimation(target.target);
                  }}
                  onMouseLeave={(target) => {
                    hoverLeaveAnimation(target.target);
                  }}
                >
                  <Icon src={language.img} alt={language.name + " icon"} />
                  <p className="iconName">{language.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
