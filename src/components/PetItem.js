import React from "react";
import { Link } from "react-router-dom";
import { deletePet } from "../api/pets";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const PetItem = ({ pet }) => {
  const queryClient = useQueryClient();
  const {mutate: dPet} = useMutation({
    mutationFn: () => deletePet(pet.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
  });
  const handleDelete = (e) => {
    e.preventDefault();
    dPet();
  };
  return (
    <div className="flex flex-col justify-between items-center p-4  w-[300px] h-[400px] border border-black bg-purple-300 rounded-[12px] ml-24 mt-10">
      <h1 className=" text-md font-bold ">{pet.name}</h1>
      <img
        className="w-[95%] h-[70%] rounded-[12px]"
        src={pet.image}
        alt={pet.name}
      />
      <div className="flex justify-between items-center w-[70%] mb-5">
        <Link to={`/pets/${pet.id}`}>
          <button
            type="button"
            className=" pl-2 pr-2 border border-black bg-green-700 hover:bg-green-300 rounded-md"
          >
            View
          </button>
        </Link>
        <button
          type="button"
          onClick={handleDelete}
          className=" pl-2 pr-2 border border-black bg-red-700 hover:bg-red-300 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PetItem;
