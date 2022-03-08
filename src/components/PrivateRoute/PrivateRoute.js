import { Navigate, Route  } from 'react-router-dom'

export const PrivateRoute = ({ children, routeLogin}) => {
  const  adminInfo = JSON.parse(localStorage.getItem('AdminInfo'));
  if(adminInfo){
      return adminInfo.role === 'Admin' ? children : <Navigate to={routeLogin} />;
  }
  else{
    return <Navigate to={routeLogin} />
  }
}