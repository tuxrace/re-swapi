import axios from 'axios';

export const getAllPeopleAPI = async (payload: any) => {
  const res = await axios.get(payload);
  return res.data;
};
