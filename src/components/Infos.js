import { React, useEffect } from "react";
import { gsap, Expo } from "gsap";

export default function Infos(props) {
  var tl = gsap.timeline();

  useEffect(() => {
    if (props.loadingEnded === false) {
      tl.to([".info-background", ".info"], 1.8, {
        left: "-100%",
        ease: Expo.easeInOut,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.loadingEnded === true) {
    tl.to([".info-background", ".info"], 1.8, {
      left: "0%",
      ease: Expo.easeInOut,
    }).from(
      [".info-picture", ".info-details"],
      1.8,
      {
        opacity: 0,
        y: 50,
        ease: Expo.easeInOut,
        stagger: 0.1,
      },
      "-=1.6"
    );
  }

  return (
    <>
      <div className="info-background"></div>
      <div className="info">
        <div className="info-picture"></div>
        <div className="info-details">
          <p className="info-name">MOHAMED NDOYE</p>
          <p className="info-adress text">
            Bat.76, HTML LA BEAUCAIRE <br /> Place des accacias
          </p>
          <p className="info-city text">83200 TOULON</p>
          <p className="info-phone text">+33 6 67 07 01 95</p>
          <p className="info-mail text">NdoyeMD@outlook.fr</p>
        </div>
      </div>
    </>
  );
}
