import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import css from "./ButtonBack.module.css";

export const Buttonback = () => {
  return (
    <>
      <div className={css.buttonBox}>
        <Link className={css.button} to="/">
          Back <RiArrowGoBackFill className={css.icon} />
        </Link>
      </div>
    </>
  );
};
