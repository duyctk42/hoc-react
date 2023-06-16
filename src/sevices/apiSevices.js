import axios from "../utils/axiosCustomise";
const postCreatNewUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};
const getAllusers = () => {
  return axios.get("api/v1/participant/all");
};
const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};
const getUserWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};
const postLogin = (userEmail, userPassword) => {
  return axios.post(`/api/v1/login`, {
    email: userEmail,
    password: userPassword,
    delay: 5000,
  });
};
const deteleUser = (userId) => {
  return axios.detele("api/v1/participant", { id: userId });
};
const postRegister = (email, password, username) => {
  return axios.post("/api/v1/register", { email, password, username });
};
export {
  postCreatNewUser,
  getAllusers,
  putUpdateUser,
  deteleUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
};
