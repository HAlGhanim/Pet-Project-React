import React from "react";

const TypeSelector = ({ name, onChange }) => {
  return (
    <div className="flex justify-center ">
      <h1 className="w-[25%]">{name}</h1>
      <select
        name={name}
        onChange={onChange}
        className="w-[70%] border pl-2 border-black rounded-md"
        placeholder={name}
        required
      >
        <option value="" disabled selected>
          Choose type
        </option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Rabbit">Rabbit</option>
      </select>
    </div>
  );
};

export default TypeSelector;
