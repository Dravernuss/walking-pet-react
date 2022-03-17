import API_SERVER from "./api.server.js";

const ENDPOINTS = {
  GET_ALL_DATES: "/api/dates",
  GET_ONE_DATE: "/api/dates",
  CREATE: "/api/dates/create",
  UPDATE: "/api/dates/update",
  // DELETE: "/api/users/delete",
};

export const getOneDate = (id) => {
  //   const token = JSON.parse(localStorage.getItem("infoDate")).token;
  const path = `${API_SERVER}${ENDPOINTS.GET_ONE_DATE}/${id}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
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

export const updateDate = (data) => {
  const id = data.id;
  const cambio = data.status;
  //   const token = JSON.parse(localStorage.getItem("infoDate")).token;
  const path = `${API_SERVER}${ENDPOINTS.UPDATE}/${id}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "PUT",
      body: JSON.stringify(cambio),
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const createDate = (date) => {
  const path = `${API_SERVER}${ENDPOINTS.CREATE}`;

  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "POST",
      body: JSON.stringify(date),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const getAllDates = () => {
  const path = `${API_SERVER}${ENDPOINTS.GET_ALL_DATES}`;
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(path, requestOptions)
      .then((response) => response.text())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};
