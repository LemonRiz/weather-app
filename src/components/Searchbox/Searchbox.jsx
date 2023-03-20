import React from "react";
import "./Searchbox.scss";

const Searchbox = ({ label, searchTerm, onInput }) => {
  console.log(onInput);
  return (
    <input
      type="text"
      name={label}
      value={searchTerm}
      onInput={onInput}
      className="nav__searchbox"
      placeholder="Enter your location"
    />
  );
};

export default Searchbox;
