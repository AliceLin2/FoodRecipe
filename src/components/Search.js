import React from "react";

function Search({handleSearch, search}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
}

export default Search;