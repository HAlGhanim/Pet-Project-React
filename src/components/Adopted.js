import React from "react";

const Adopted = ({ name, onChange }) => {
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
          Adopted?
        </option>
        <option value="0">No</option>
        <option value="1">Yes</option>
      </select>
    </div>
  );
};

export default Adopted;
