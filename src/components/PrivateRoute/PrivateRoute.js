import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ({ children, routeLogin }) => {
  const adminInfo = JSON.parse(localStorage.getItem("AdminInfo"));
  if (adminInfo) {
    return adminInfo.role === "Admin" ? children : <Navigate to={routeLogin} />;
  } else {
    return <Navigate to={routeLogin} />;
  }
};

export const PrivateRouteUser = ({ children, routeLogin }) => {
  const userInfo = JSON.parse(localStorage.getItem("infoUser"));
  if (userInfo) {
    return userInfo.role === "user" || "walker" ? (
      children
    ) : (
      <Navigate to={routeLogin} />
    );
  } else {
    return <Navigate to={routeLogin} />;
  }
};

export const PrivateRouteWalker = ({ children, routeLogin }) => {
  const walkerInfo = JSON.parse(localStorage.getItem("infoUser"));
  if (walkerInfo) {
    return walkerInfo.role === "walker" ? (
      children
    ) : (
      <Navigate to={routeLogin} />
    );
  } else {
    return <Navigate to={routeLogin} />;
  }
};

export const PrivateRouteClient = ({ children, routeLogin }) => {
  const clientInfo = JSON.parse(localStorage.getItem("infoUser"));
  if (clientInfo) {
    return clientInfo.role === "user" ? children : <Navigate to={routeLogin} />;
  } else {
    return <Navigate to={routeLogin} />;
  }
};
