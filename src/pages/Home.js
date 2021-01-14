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
      <div ref={(el) => (page = el)} className="content">
        <p className="page-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aut
          nihil quaerat minus, animi unde vero rerum voluptatum fugit sunt,
          debitis laborum nostrum, ad repellat. Accusamus voluptas animi minus
          beatae! Atque commodi maiores eum dicta temporibus quisquam incidunt
          placeat, reiciendis earum repellendus natus! Assumenda, ipsa sunt
          impedit ipsum asperiores, rerum eligendi fugiat quasi voluptate eos
          deleniti explicabo deserunt doloremque aspernatur? Officiis
          voluptatibus explicabo blanditiis, distinctio deleniti nisi obcaecati
          ducimus non sequi reprehenderit, veritatis doloremque tenetur
          architecto harum expedita. Dignissimos illum reprehenderit rerum
          ratione necessitatibus ab maxime itaque reiciendis quidem totam!
          Deleniti minima reiciendis error. Rem optio ducimus necessitatibus
          blanditiis explicabo dolor, illum ex vero pariatur.
        </p>
      </div>
    </div>
  );
}
