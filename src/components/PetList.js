import React, { useState } from "react";
import PetItem from "../components/PetItem";
import { getPets } from "../api/pets";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../components/SearchBar";
import Modal from "./Modal";

const PetList = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { data: pets, isLoading } = useQuery({
    queryKey: ["pets"],
    queryFn: () => getPets(),
  });
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  const petList = pets
    ?.filter(
      (pets) =>
        pets.name.toLowerCase().includes(query.toLowerCase()) &&
        pets.type.includes(type)
    )
    .map((pet) => <PetItem pet={pet} key={pet.id} />);
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center mt-4">
          <SearchBar handleChange={handleChange} handleType={handleType} />
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className=" ml-5 w-[7%] h-8 p-1 rounded-md border border-black bg-green-400 hover:bg-green-600"
          >
            Add pet
          </button>
        </div>
        <div className="flex flex-wrap gap-[30px] justify-center">
          {petList}
        </div>
      </div>
      <Modal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default PetList;
