/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect, useState } from "react";
import anime from "animejs";
import * as colors from "../scss/abstracts/colors.module.scss"; // Scss colors variables object
import { Link } from "react-router-dom";

let menuDisplayed = false;

export default function Menu(props) {
  const [loadedOnce, setLoadedOnce] = useState(false);
  const [navLinkClicked, setNavLinkClicked] = useState(false);
  const [hamClicked, setHamClicked] = useState(false);

  // Menu toggle function: Display or hide the menu on toggle
  function hamIconToggle(displayState) {
    let tl = anime.timeline({
      duration: 800,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".wrapper",
      opacity: 1,
    });

    switch (displayState) {
      // Show the menu
      case "display":
        //We set this state to false to enable the hover effects on the link
        setNavLinkClicked(false);

        // Background animation
        tl.add({
          targets: ".menuBackground",
          translateY: ["-100%", 0],
        });

        // bar color switch animation
        tl.add(
          {
            targets: ".bar",
            backgroundColor: colors.secondary,
          },
          "-=800"
        );

        // cross to hamburger animation
        tl.add(
          {
            targets: ".bar:last-child",
            keyframes: [{ bottom: "73%" }, { rotate: "45deg" }],
          },
          "-=800"
        );
        tl.add(
          {
            targets: ".bar:first-child",
            keyframes: [{ top: "73%" }, { rotate: "-45deg" }],
            complete: () => {
              setHamClicked(false);
            },
          },
          "-=800"
        );

        // NavLinks animation
        tl.add(
          {
            targets: ".navLinks",
            translateY: ["100%", 0],
            delay: anime.stagger(50),

            duration: 1200,
            easing: "easeOutQuint",
          },
          "-=800"
        );
        break;

      // Hide the menu
      case "hide":
        //We set this state to true to disable hover effects on the link
        setNavLinkClicked(true);

        // NavLinks animation
        tl.add({
          targets: ".navLinks",
          translateY: [0, "100%"],
          delay: anime.stagger(50, { from: "last" }),
          duration: 600,
          easing: "easeInQuint",
        });

        // Background animation
        tl.add(
          {
            targets: ".menuBackground",
            translateY: "-100vh",
          },
          "-=200"
        );

        // bar color switch animation
        tl.add(
          {
            targets: ".bar",
            backgroundColor: colors.primary,
          },
          "-=800"
        );

        // cross to hamburger animation
        tl.add(
          {
            targets: ".bar:last-child",
            keyframes: [{ rotate: "0deg" }, { bottom: 0 }],
            easing: "easeOutQuint",
          },
          "-=200"
        );

        tl.add(
          {
            targets: ".bar:first-child",
            keyframes: [{ rotate: "0deg" }, { top: 0 }],
            easing: "easeOutQuint",
            complete: () => {
              setHamClicked(false);
            },
          },
          "-=800"
        );
        break;

      // Log an error otherwise
      default:
        console.log("--- DEBUG ---\nMenuDisplayed contains an invalid value");
        break;
    }
  }

  const linksList = [
    { key: 1, title: "Home", link: "/" },
    { key: 2, title: "Work", link: "/work" },
    { key: 3, title: "Education", link: "/education" },
    { key: 4, title: "Skills", link: "/skills" },
    { key: 5, title: "Experience", link: "/experience" },
  ];

  // Enter animation
  function loadEnterAnimation(duration) {
    if (props.startAnimations && loadedOnce === false) {
      let tl = anime.timeline({
        easing: "easeOutExpo",
        duration: duration,
      });

      tl.add({
        targets: ".bar",
        translateY: [5, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
      });

      setLoadedOnce(true);
    }
  }

  useEffect(() => {
    loadEnterAnimation(1200);
  });

  return (
    <div className="menuContainer">
      <div
        className={hamClicked ? "hamburgerIcon no-hover" : "hamburgerIcon"}
        onClick={() => {
          menuDisplayed = menuDisplayed ? false : true;
          setHamClicked(true);
          hamIconToggle(menuDisplayed ? "display" : "hide");
        }}
      >
        <span className={hamClicked ? "bar no-hover" : "bar"}></span>
        <span className={hamClicked ? "bar no-hover" : "bar"}></span>
      </div>
      <div className="wrapper">
        <nav>
          <ul>
            {linksList.map((link) => {
              return (
                <li key={link.key}>
                  <Link
                    className={`navLinks ${
                      menuDisplayed && !navLinkClicked ? "" : "no-hover"
                    } ${link.title === "Work" ? "coming-soon" : ""}`}
                    onClick={() => {
                      menuDisplayed = menuDisplayed ? false : true;
                      hamIconToggle("hide");
                    }}
                    to={link.link}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="leftDecoration"></div>
      </div>
      <div className="menuBackground"></div>
    </div>
  );
}
