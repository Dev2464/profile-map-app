import React from "react";

const SearchFilter = ({ setSearchQuery }) => (
  <input
    type="text"
    placeholder="Search profiles..."
    onChange={(e) => setSearchQuery(e.target.value)}
    style={{ padding: "0.5em", margin: "1em 0" }}
  />
);

export default SearchFilter;