import API_SERVER from "./api.server.js";

const ENDPOINTS = {
  CREATE: "/api/admins/create",
  LOGIN: "/api/admins/login",
};

export const loginAdmin = (admin) => {
  const path = `${API_SERVER}${ENDPOINTS.LOGIN}`;
  return new Promise((resolve, reject) => {
    const body = {
      method: "POST",
      body: JSON.stringify(admin),
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    fetch(path, body)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve({ token: data.token });
      })
      .catch((err) => {
        reject({ error: err, alert: true });
      });
  });
};
