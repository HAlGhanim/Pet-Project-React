import React from "react";

const SearchBar = ({ handleChange, handleType }) => {
  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        className="w-[64%] rounded p-1"
        placeholder="search"
      />
      <select
        onChange={handleType}
        className="ml-5 text-center rounded-md p-1 border border-black"
      >
        <option value="" selected>
          All
        </option>
        <option value="Human"> Human</option>
        <option value="Cat"> Cat</option>
        <option value="Dog"> Dog</option>
        <option value="Rabbit">Rabbit</option>
      </select>
    </div>
  );
};

export default SearchBar;
