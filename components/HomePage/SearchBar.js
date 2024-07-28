"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="search-bar-container flex">
      <input
        className="input"
        placeholder="Search..."
        type="text"
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
        value={searchVal}
      />
      <button className="flex items-center justify-center">
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
