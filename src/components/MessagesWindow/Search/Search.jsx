import React from "react";

import { ReactComponent as Loupe } from "../../../assets/img/search-loupe.svg";

import css from "./Search.module.scss";

const Search = () => {
  return (
    <div className={css.wrapSearch}>
      <button className={css.btn}>
        <Loupe />
      </button>
      <input
        className={css.input}
        type="text"
        placeholder="Search message..."
      />
    </div>
  );
};

export default Search;
