import API_SERVER from "./api.server.js";

const ENDPOINTS = {
  GET_PETS_BY_USER: "/api/pets",

  //   GET_ONE_USER: "/api/users",
  //   CREATE: "/api/users/create",
  //   UPDATE: "/api/users/update",
  //   DELETE: "/api/users/delete",
  //   LOGIN: "/api/users/login",
};

export const getPetsByUser = (id) => {
  // const token = JSON.parse(localStorage.getItem("infoUser")).token;
  const path = `${API_SERVER}${ENDPOINTS.GET_PETS_BY_USER}/${id}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};
