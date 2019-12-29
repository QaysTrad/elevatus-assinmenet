import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ name, onChange, title, value }) => (
  <div className="search-content">
    <input
      type="text"
      className="search-input"
      placeholder={title}
      onChange={onChange}
      name={name}
      value={value}
    />
    <div className="search-icon">
      <FontAwesomeIcon icon={faSearch} />
    </div>
  </div>
);

export default Search;
