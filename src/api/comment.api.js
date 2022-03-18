import API_SERVER from "./api.server.js";

const ENDPOINTS = {
  GET_ALL_COMMENTS: "/api/comments",
  GET_ALL_COMMENTS_BY_WALKER: "/api/comments/walker",
  GET_ALL_REPORTS: "/api/comments/reports",
  GET_COMMENT_BY_ID: "/api/comments",
  CREATE: "/api/comments/create",
  UPDATE_ADMIN: "/api/comments/update",
};

export const getAllComments = () => {
  // const token = JSON.parse(localStorage.getItem("infoWalker")).token;
  const path = `${API_SERVER}${ENDPOINTS.GET_ALL_COMMENTS}`;
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

export const getAllCommentsByWalker = (idWalker) => {
  //   const token = JSON.parse(localStorage.getItem("infoWalker")).token;
  const path = `${API_SERVER}${ENDPOINTS.GET_ALL_COMMENTS_BY_WALKER}/${idWalker}`;
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

export const getAllReports = () => {
  // const token = JSON.parse(localStorage.getItem("infoUser")).token;
  const path = `${API_SERVER}${ENDPOINTS.GET_ALL_REPORTS}`;
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

export const getCommentById = (id) => {
  // const token = JSON.parse(localStorage.getItem("infoUser")).token;
  const path = `${API_SERVER}${ENDPOINTS.GET_COMMENT_BY_ID}/${id}`;
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

export const createComment = (comment) => {
  // const token = JSON.parse(localStorage.getItem("infoUser")).token;
  const path = `${API_SERVER}${ENDPOINTS.CREATE}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
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

export const updateCommentByAdmin = ({ idComment, ...comment }) => {
  // const token = JSON.parse(localStorage.getItem("infoUser")).token;
  const path = `${API_SERVER}${ENDPOINTS.UPDATE_ADMIN}/${idComment}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "PUT",
      body: JSON.stringify(comment),
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
