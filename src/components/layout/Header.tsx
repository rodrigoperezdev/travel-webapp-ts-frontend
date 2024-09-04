import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleActiveMenu = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="src/assets/images/logo/emprise.svg"
          alt="Logo"
        />
      </Link>
      <div className={`header__menu ${isActive ? "active-menu" : ""}`}>
        <nav className={`header__nav ${isActive ? "active-menu" : ""}`}>
          <ul className="header__list">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "header__item header__item--active"
                    : "header__item"
                }
                to="/destination"
              >
                Destination
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "header__item header__item--active"
                    : "header__item"
                }
                to="/activities"
              >
                Activities
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "header__item header__item--active"
                    : "header__item"
                }
                to="/specials"
              >
                Specials
              </NavLink>
            </li>
          </ul>
          <img
            className="header__search-icon"
            src="src/assets/images/header/search.svg"
            alt="Search"
          />
        </nav>
        <div className="header__login">
          <Link className="header__login-text" to="/login">
            Login
          </Link>
          <Link className="btn btn--primary" to="/signup">
            Sign up
          </Link>
        </div>
      </div>

      <button
        onClick={handleActiveMenu}
        className={`hamburger hamburger--collapse ${
          isActive ? "is-active" : ""
        }`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </header>
  );
};
