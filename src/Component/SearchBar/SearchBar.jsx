import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Type here"
          className="input input-bordered input-primary w-full"
        />
      </form>
    </div>
  );
};

export default SearchBar;
