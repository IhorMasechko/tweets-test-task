import React from "react";
import { StyledLink } from "./NavlinkStyles";
import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <div>
          <h1 className={css.name}>TWITTER</h1>
        </div>
        <div>
          <StyledLink className={css.link} to="/">
            Home
          </StyledLink>
          <StyledLink className={css.link} to="/tweets">
            Tweets
          </StyledLink>
        </div>
      </nav>
    </header>
  );
};
