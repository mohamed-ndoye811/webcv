import { React, useEffect } from "react";
import { gsap, Expo } from "gsap";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const links = [
    { key: 1, path: "/", title: "Home" },
    { key: 2, path: "/about", title: "About" },
    { key: 3, path: "/contact", title: "Contact" },
    { key: 4, path: "/experience", title: "Experience" },
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
            {links.map(({ path, title }) => (
              <li>
                <NavLink
                  key={path}
                  className="navlink"
                  activeClassName="navlink-active"
                  to={path}
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
