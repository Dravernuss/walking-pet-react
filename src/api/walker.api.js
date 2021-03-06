import API_SERVER from "./api.server.js";

const ENDPOINTS = {
  GET_ALL_WALKERS: "/api/walkers",
  GET_ALL_WALKERS_REGISTRATION: "/api/walkers/registration",
  GET_ONE_WALKER: "/api/walkers",
  GET_ONE_WALKER_BY_EMAIL: "/api/walkers/exists",
  CREATE: "/api/walkers/create",
  UPDATE: "/api/walkers/update",
  LOGIN: "/api/walkers/login",
};

export const loginWalker = (walker) => {
  const path = `${API_SERVER}${ENDPOINTS.LOGIN}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "POST",
      body: JSON.stringify(walker),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve({ token: data.token, _id: data._id, role: data.role });
      })
      .catch((err) => {
        reject({ error: err, alert: true });
      });
  });
};

export const getOneWalker = (id) => {
  const token = JSON.parse(localStorage.getItem("infoUser")).token;
  const path = `${API_SERVER}${ENDPOINTS.GET_ONE_WALKER}/${id}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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

export const getOneWalkerByEmail = (email) => {
  const path = `${API_SERVER}${ENDPOINTS.GET_ONE_WALKER_BY_EMAIL}/${email}`;
  return new Promise((resolve, reject) => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const updateWalker = ({ id, ...walker }) => {
  const token = JSON.parse(localStorage.getItem("infoUser")).token;
  const path = `${API_SERVER}${ENDPOINTS.UPDATE}/${id}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "PUT",
      body: JSON.stringify(walker),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

export const createWalker = (walker) => {
  const path = `${API_SERVER}${ENDPOINTS.CREATE}`;

  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "POST",
      body: JSON.stringify(walker),
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

export const getAllWalkers = () => {
  const path = `${API_SERVER}${ENDPOINTS.GET_ALL_WALKERS}`;
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(path, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};
export const getAllWalkersRegistration = () => {
  const path = `${API_SERVER}${ENDPOINTS.GET_ALL_WALKERS_REGISTRATION}`;
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(path, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};
