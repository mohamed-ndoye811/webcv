/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect, useState } from "react";
import anime from "animejs";
import * as colors from "../scss/abstracts/colors.module.scss"; // Scss colors variables object
import { Link } from "react-router-dom";

export default function Menu(props) {
  const [menuDisplayed, setMenuDisplayed] = useState(false);
  const [loadedOnce, setLoadedOnce] = useState(false);

  const linksList = [
    { title: "Home", link: "/" },
    { title: "Work", link: "/work" },
    { title: "Education", link: "/education" },
    { title: "Skills", link: "/skills" },
    { title: "Experience", link: "/experience" },
  ];

  // Enter animation
  function loadEnterAnimation(duration) {
    if (props.startAnimations && loadedOnce === false) {
      let tl = anime.timeline({
        easing: "easeOutExpo",
        duration: duration,
      });

      tl.add({
        targets: ".menuContainer",
        opacity: 0,
      });

      tl.add(
        {
          targets: ".menuContainer nav ul li",
          opacity: 0,
        },
        "-=" + duration
      );

      tl.add(
        {
          targets: ".bar",
          opacity: 0,
        },
        "-=" + duration
      );

      tl.add(
        {
          targets: ".menuContainer",
          opacity: 1,
        },
        "-=" + duration / 3
      );

      tl.add(
        {
          targets: ".menuContainer nav ul li",
          opacity: 1,
        },
        "-=" + duration
      );

      tl.add(
        {
          targets: ".bar",
          translateY: [5, 0],
          opacity: 1,
          delay: anime.stagger(150),
        },
        "-=" + duration / 3
      );

      setLoadedOnce(true);
    }
  }

  function menuDisplayedToggle() {
    setMenuDisplayed(!menuDisplayed);
  }

  function hamIconToggle() {
    let tl = anime.timeline({
      duration: 800,
      easing: "easeOutExpo",
    });

    switch (menuDisplayed) {
      // Show the menu
      case true:
        // Background animation
        tl.add({
          targets: ".menuBackground",
          translateY: 0,
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
            keyframes: [{ bottom: "70%" }, { rotate: "45deg" }],
          },
          "-=800"
        );
        tl.add(
          {
            targets: ".bar:first-child",
            keyframes: [{ top: "70%" }, { rotate: "-45deg" }],
          },
          "-=800"
        );

        // NavLinks animation
        tl.add(
          {
            targets: ".navLinks",
            translateY: 0,
            delay: anime.stagger(50),
            duration: 1200,
            easing: "easeOutQuint",
          },
          "-=800"
        );
        break;

      // Hide the menu
      case false:
        // NavLinks animation
        tl.add({
          targets: ".navLinks",
          translateY: 100,
          delay: anime.stagger(50),
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

  useEffect(() => {
    loadEnterAnimation(1200);

    hamIconToggle();
  });

  return (
    <div className="menuContainer">
      <div className="hamburgerIcon" onClick={menuDisplayedToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="wrapper">
        <nav>
          <ul>
            {linksList.map((link) => {
              return (
                <li>
                  <Link
                    className="navLinks"
                    onClick={menuDisplayedToggle}
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
