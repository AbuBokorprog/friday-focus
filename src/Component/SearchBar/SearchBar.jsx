import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center gap-4">
          <input
            type="search"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <input type="submit" value="Search" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
