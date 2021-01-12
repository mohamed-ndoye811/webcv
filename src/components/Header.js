import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/more">More</NavLink>
            </li>
            <li>
              <NavLink to="/moha">Moha</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
