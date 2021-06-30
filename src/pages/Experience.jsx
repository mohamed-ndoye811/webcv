import { React, useEffect } from "react";
import anime from "animejs";

//---- Component imports
import PageTitle from "../components/PageTitle";

export default function Experience(props) {
  let experienceList = [
    {
      key: 1,
      name: "Stage lsr var, 3 semaines, toulon",
      school: "Programmation de plugins SketchUp et Revit",
      year: 2020,
    },
    {
      key: 2,
      name: "Stage Layher, 2 mois, paris",
      school: "Redesign et re-développement de leur site internet",
      year: 2021,
    },
  ];

  function loadEnterAnimation(duration) {
    let tl = anime.timeline();

    tl.add({
      targets: ".experienceCard",
      translateY: [150, 0],
      opacity: [0, 1],
      easing: "easeOutQuint",
      duration: duration,
      delay: anime.stagger(100),
    });
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
      <PageTitle title="Experience" />
      <main className="experiencePage">
        <div className="container experienceContainer">
          <div className="experienceList">
            {experienceList
              .sort((a, b) => {
                return a.year > b.year ? 0 : 1;
              })
              .map((experience) => {
                return (
                  <div className="experienceCard" key={experience.key}>
                    <div className="year">{experience.year}</div>
                    <div className="name">{experience.name}</div>
                    <div className="school">{experience.school}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}
