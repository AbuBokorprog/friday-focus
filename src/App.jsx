import { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import AllNews from "./pages/AllNews/AllNews";
import Banner from "./pages/Home/Banner";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Banner />
      <AllNews searchQuery={searchQuery} />
    </div>
  );
};

export default App;
