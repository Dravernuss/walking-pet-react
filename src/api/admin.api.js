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
      redirect: 'follow'
    }
    console.log("LOGIN", path);
    console.log('body',body)
    fetch(path, body)
      .then((response) => {
        // if(!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((data) => {
        resolve({ token: data.token });
        // resolve(data);
      })
      .catch((err) => {
        reject({ error: err, alert: true });
      });
  });
};