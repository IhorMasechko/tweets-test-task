import React, { useState } from "react";
import css from "./Filter.module.css";

export const Filter = () => {
  const [value, setValue] = useState("all");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={css.filterBlock}>
      <label className={css.label}>
        Filter
        <select value={value} onChange={handleChange} className={css.list}>
          <option value="all">all</option>
          <option value="follow">follow</option>
          <option value="followings">followings</option>
        </select>
      </label>
      <p>Showing {value}</p>
    </div>
  );
};
