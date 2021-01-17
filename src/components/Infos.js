import { React, useEffect } from "react";
import { gsap, Expo } from "gsap";

import mail_icon from "../img/social_icons/mail_icon.svg";
import linkedin_icon from "../img/social_icons/linkedin_icon.svg";
import phone_icon from "../img/social_icons/phone_icon.svg";

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
      [".info-picture", ".contacts-links"],
      1.8,
      {
        opacity: 0,
        y: 100,
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
        <div className="contacts-icons">
          <ul>
            <li className="contacts-links">
              <a href="tel:+33667070195">
                <img src={phone_icon} alt="phone icon" />
              </a>
            </li>
            <li className="contacts-links">
              <a href="mailto: NdoyeMD@outlook.fr">
                <img src={mail_icon} alt="mail icon" />
              </a>
            </li>
            <li className="contacts-links">
              <a href="https://www.linkedin.com">
                <img src={linkedin_icon} alt="linkedIn icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
