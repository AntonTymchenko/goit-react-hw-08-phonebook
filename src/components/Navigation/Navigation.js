import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth-selectors";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

const Navigation = () => {
  const isLiggedIn = useSelector((state) => authSelectors.getIsLoggedIn(state));

  return (
    <nav>
      {!isLiggedIn ? (
        <NavLink
          to="/"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Home
        </NavLink>
      ) : (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
