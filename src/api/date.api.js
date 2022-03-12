import API_SERVER from "./api.server.js";

const ENDPOINTS = {
  GET_ALL_DATES: "/api/dates",
  GET_DATE_BY_ID: "/api/dates",
  GET_DATES_BY_USER: "/api/dates/user",
  GET_DATES_BY_WALKER: "/api/dates/walker",
  CREATE: "/api/dates/create",
  UPDATE: "/api/dates/update",
};

export const getAllDates = () => {
  // const token = JSON.parse(localStorage.getItem("infoWalker")).token;
  const path = `${API_SERVER}${ENDPOINTS.GET_ALL_DATES}`;
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

export const getDateById = (id) => {
  //   const token = JSON.parse(localStorage.getItem("infoWalker")).token;
  const path = `${API_SERVER}${ENDPOINTS.GET_DATE_BY_ID}/${id}`;
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

export const getDatesByUser = (idUser) => {
  // const token = JSON.parse(localStorage.getItem("infoUser")).token;
  const path = `${API_SERVER}${ENDPOINTS.GET_DATES_BY_USER}/${idUser}`;
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
export const getDatesByWalker = (idWalker) => {
  // const token = JSON.parse(localStorage.getItem("infoUser")).token;
  const path = `${API_SERVER}${ENDPOINTS.GET_DATES_BY_WALKER}/${idWalker}`;
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

export const createDate = (date, userId) => {
  // const token = JSON.parse(localStorage.getItem("infoUser")).token;
  const path = `${API_SERVER}${ENDPOINTS.CREATE}/${userId}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "POST",
      body: JSON.stringify(date),
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

export const updateDate = ({ idDate, ...date }) => {
  console.log("id", idDate);
  console.log("date", date);
  // const token = JSON.parse(localStorage.getItem("infoUser")).token;
  const path = `${API_SERVER}${ENDPOINTS.UPDATE}/${idDate}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "PUT",
      body: JSON.stringify(date),
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
