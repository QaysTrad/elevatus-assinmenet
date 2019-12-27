import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ name }) => (
  <div className="search-content">
    <input className="search-input" placeholder={name} />
    <div className="search-icon">
      <FontAwesomeIcon icon={faSearch} />
    </div>
  </div>
);

export default Search;
