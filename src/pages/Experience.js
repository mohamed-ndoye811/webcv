import React from "react";

import Title from "../components/Title";
import ExperienceListItem from "../components/ExperienceListItem";

export default function Experience() {
  const experiences = [
    {
      job_name: "DEVELOPPEUR LOGICIEL",
      company_name: "LAYHER",
      date: "6/04/2020",
      duration: "3 SEMAINES",
      tasks: "Programmation de plugins pour les logiciels Revit et SketchUp",
      languages_used: ["ruby", "c#"],
    },
  ];

  return (
    <>
      <Title TextLine1="EXPERIENCES PROFESSIONNELLES"></Title>
      <div className="exp-page-container">
        <div className="content">
          {experiences.map(
            ({
              job_name,
              company_name,
              date,
              duration,
              tasks,
              languages_used,
            }) => (
              <ExperienceListItem
                job_name={job_name}
                company_name={company_name}
                date={date}
                duration={duration}
                tasks={tasks}
                languages_used={languages_used}
              ></ExperienceListItem>
            )
          )}
        </div>
      </div>
    </>
  );
}
