import React from "react";
import "./Searchbox.scss";

const Searchbox = ({ label, searchTerm, handleInput }) => {
  return (
    <input
      type="text"
      name={label}
      value={searchTerm}
      onInput={handleInput}
      className="nav__searchbox"
    />
  );
};

export default Searchbox;
