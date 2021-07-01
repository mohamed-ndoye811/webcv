import React from "react";

export default function Icon(props) {
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

  return (
    <>
      <img
        src={
          "./img/programming-languages/" +
          languages.find((pl) => pl.img === props.src).img +
          ".svg"
        }
        alt={props.alt}
        className="iconImg"
      ></img>
    </>
  );
}
