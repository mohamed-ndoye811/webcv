import React from "react";

//---- Component imports
import PageTitle from "../components/PageTitle";

export default function Experience() {
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
