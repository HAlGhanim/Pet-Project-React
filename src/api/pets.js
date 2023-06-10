import instance from ".";

const getPets = async () => {
  const res = await instance.get("pets/");
  return res.data;
};

const getPetById = async (id) => {
  const res = await instance.get(`pets/${id}`);
  return res.data;
};

const addPet = async (petInfo) => {
  const res = await instance.post(`pets/`, petInfo);
  return res.data;
};

const updatePet = async (id, petInfo) => {
  const res = await instance.put(`pets/${id}`, { ...petInfo, adopted: 1 });
  return res.data;
};

const deletePet = async (id) => {
  const res = await instance.delete(`pets/${id}`);
  return res.data;
};

export { getPets, getPetById, addPet, updatePet, deletePet };
