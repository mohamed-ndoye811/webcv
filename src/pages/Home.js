import { React, useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";
import Title from "../components/Title";

export default function Home() {
  let page = useRef(null);

  useEffect(() => {
    gsap.from(".content", 1, {
      y: 100,
      delay: 1,
      ease: Expo.easeOut,
      stagger: 0.5,
    });
  }, [page]);

  return (
    <div className="page-container">
      <Title
        TextLine1="HEY! WELCOME TO"
        TextLine2="MOHAMED'S WEB RESUME"
      ></Title>
      <div ref={(el) => (page = el)} className="content"></div>
    </div>
  );
}
