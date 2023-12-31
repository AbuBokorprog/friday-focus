import { useState } from "react";

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
            placeholder="Search Your News"
            className="input input-bordered input-primary max-w-2xl"
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
