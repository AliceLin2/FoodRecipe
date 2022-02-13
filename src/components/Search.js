import React from "react";

function Search({handleSearch, search}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by food"
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
}

export default Search;