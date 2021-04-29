import React from "react";
import { Link } from "react-router-dom";

import classes from "./styles.module.scss";

const routes = [
  { label: "Home", path: "/" },
  { label: "login", path: "/login" },
];

const TopBar = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Navbar}>
        <div>
          <ul>
            {routes.map((route, i) => {
              return (
                <Link key={i} to={route.path}>
                  {route.label}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
