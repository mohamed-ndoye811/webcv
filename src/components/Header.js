import { React, useEffect } from "react";
import { gsap, Expo } from "gsap";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const links = [
    { to: "/", title: "Home" },
    { to: "/about", title: "About" },
    { to: "/contact", title: "Contact" },
  ];

  useEffect(() => {
    if (props.loadingEnded === false) {
      gsap.to(".navlink", 0.6, {
        top: "-200%",
        ease: Expo.easeInOut,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.loadingEnded === true) {
    gsap.to(".navlink", 0.6, {
      top: "0%",
      ease: Expo.easeInOut,
      stagger: 0.15,
    });
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            {links.map(({ to, title }) => (
              <li>
                <NavLink
                  className="navlink"
                  activeClassName="navlink-active"
                  to={to}
                  exact
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
