import { React, useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";
import Title from "../components/Title";

export default function Home() {
  let page = useRef(null);

  useEffect(() => {
    gsap.from(".home-page-text", 1, {
      ease: Expo.easeInOut,
      stagger: 0.5,
    });
  }, [page]);

  return (
    <>
      <Title TextLine1="HEY! WELCOME TO" TextLine2="THE HOME PAGE"></Title>
      <div className="page-container">
        <div ref={(el) => (page = el)} className="content">
          <p className="home-page-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            dolorem sapiente modi molestias minus, quo, omnis illum odit debitis
            velit obcaecati eos. Eaque sapiente, corporis molestias reiciendis
            qui modi a. Beatae eligendi est fugiat corporis earum voluptas
            veniam aperiam quia sed dicta atque tempora deserunt quae animi,
            adipisci fuga? Eos, alias! Mollitia excepturi illo consectetur
            nesciunt architecto libero, in consequuntur? Modi commodi veritatis,
            ipsa nam quaerat magnam cum nulla cupiditate neque perspiciatis
            eaque hic ipsum est tenetur quisquam aspernatur libero error sunt,
            numquam excepturi repudiandae temporibus praesentium! Amet, soluta
            molestias.
          </p>
        </div>
      </div>
    </>
  );
}
