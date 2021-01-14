import { React, useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";

export default function Title({ TextLine1, TextLine2 }) {
  let line1 = useRef(null);
  let line2 = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2], 1, {
      y: 100,
      delay: 0.5,
      ease: Expo.easeOut,
      stagger: 0.2,
    });
  }, [line1, line2]);

  return (
    <>
      <div className="title">
        <div className="titleLine1_wrapper">
          <div ref={(el) => (line1 = el)} className="line">
            {TextLine1}
          </div>
        </div>
        <div className="titleLine2_wrapper">
          <div ref={(el) => (line2 = el)} className="titleLine2">
            {TextLine2}
          </div>
        </div>
      </div>
    </>
  );
}
