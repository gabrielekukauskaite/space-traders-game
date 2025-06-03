import { Link, useMatch } from "@tanstack/react-router";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  useMatch;
  return (
    <div className={classes.bar}>
      <Link
        activeProps={{
          className: classes.active,
        }}
        to="/"
      >
        Dashboard
      </Link>
      <Link
        activeProps={{
          className: classes.active,
        }}
        to="/starmap"
      >
        Starmap
      </Link>
    </div>
  );
};

export default NavigationBar;
