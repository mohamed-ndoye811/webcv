import { React } from "react";

//---- Component imports
import PageTitle from "../components/PageTitle";

export default function Education(props) {
  let educationList = [
    {
      key: 1,
      name: "Baccalauréat scientifique option",
      school: "Lycée bonaparte, toulon",
      year: 2018,
    },
    {
      key: 2,
      name: "DUT Génie Électrique et Informatique Industrielle",
      school: "Université de Toulon, Campus la Garde",
      year: 2020,
    },
    {
      key: 3,
      name: "Formation développeur web et applications mobiles",
      school: "Greta du var",
      year: 2021,
    },
    {
      key: 4,
      name: "Titre professionnel développeur web",
      school: "Greta du var",
      year: 2021,
    },
  ];

  return (
    <>
      <PageTitle title="Education" />
      <main className="educationPage">
        <div className="container educationContainer">
          <div className="educationList">
            {educationList
              .sort((a, b) => {
                return a.year > b.year ? 0 : 1;
              })
              .map((education) => {
                return (
                  <div className="educationCard" key={education.key}>
                    <div className="year">{education.year}</div>
                    <div className="name">{education.name}</div>
                    <div className="school">{education.school}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}
