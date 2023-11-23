import axios from "axios";

export const checkTask = (id: string) => {
  return axios.post(`http://127.0.0.1:8000/task/${id}/check/`);
};

export const deleteTask = (id: string) => {
  return axios.delete(`http://127.0.0.1:8000/task/${id}/delete/`);
};

export const verifyTask = async (id: string) => {
  const response = await axios.get(`http://127.0.0.1:8000/task/${id}/`);
  if (response.status === 200) {
    return true;
  }
  return false;
};
