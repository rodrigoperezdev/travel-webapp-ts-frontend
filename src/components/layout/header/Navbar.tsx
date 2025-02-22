import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../../assets/images/logo/emprise.svg";
import { Button } from "../../common/Button";
import { SearchBar } from "../../../features/search-bar/SearchBar";

export const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleActiveMenu = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navbar__logoContainer}>
        <img className={styles.navbar__logo} src={logo} alt="Logo" />
      </Link>

      <div
        className={`${styles.navbar__menu} ${
          isActive ? styles["active-menu"] : ""
        }`}
      >
        <nav
          className={`${styles.navbar__nav} ${
            isActive ? styles["active-menu"] : ""
          }`}
        >
          <ul className={styles.navbar__list}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navbar__item} ${styles["navbar__item--active"]}`
                    : styles.navbar__item
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
                    ? `${styles.navbar__item} ${styles["navbar__item--active"]}`
                    : styles.navbar__item
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
                    ? `${styles.navbar__item} ${styles["navbar__item--active"]}`
                    : styles.navbar__item
                }
                to="/specials"
              >
                Specials
              </NavLink>
            </li>
          </ul>
          <SearchBar />
        </nav>
        <div className={styles.navbar__login}>
          <Link className={styles.navbar__loginText} to="/login">
            Login
          </Link>
          <Link
            className={`${styles.btn} ${styles["btn--primary"]}`}
            to="/signup"
          >
            <Button label="Sign up" variant="primary" />
          </Link>
        </div>
      </div>

      <button
        onClick={handleActiveMenu}
        className={`${styles.hamburger} ${styles["hamburger--collapse"]} ${
          isActive ? styles["is-active"] : ""
        }`}
        type="button"
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>
    </div>
  );
};
