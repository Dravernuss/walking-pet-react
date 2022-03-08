import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrincipalPage from "./pages/PrincipalPage/PrincipalPage";
import Login from "./pages/Login/Login";
import "./_App.scss";
import {
  PrivateRoute,
  PrivateRouteUser,
  PrivateRouteWalker,
  PrivateRouteClient,
} from "./components/PrivateRoute/PrivateRoute";
import { Register } from "./pages/Register/Register";
import { RegisterWalker } from "./pages/Register/RegisterWalker/RegisterWalker";
import { RegisterSuccess } from "./pages/Register/RegisterSuccess/RegisterSuccess";
import ClientProfile from "./pages/ClientProfile/ClientProfile";
import WalkerProfile from "./pages/WalkerProfile/WalkerProfile";
import DatesClient from "./pages/DatesClient/DatesClient";
import DatesWalker from "./pages/DatesWalker/DatesWalker";
import { AskForDate } from "./pages/AskForDate/AskForDate";
import AdminLogin from "./pagesAdmin/AdminLogin/AdminLogin";
import ReservedTours from "./pagesAdmin/ReservedTours/ReservedTours";
import WalkerRegistration from "./pagesAdmin/WalkerRegistration/WalkerRegistration";
import Reports from "./pagesAdmin/Reports/Reports";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Ver cual HOME se usara, Rutas de usuarios*/}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/principalpage"
            element={
              <PrivateRouteUser routeLogin="/login">
                <PrincipalPage />
              </PrivateRouteUser>
            }
          />

          <Route
            path="/clientprofile"
            element={
              <PrivateRouteClient routeLogin="/login">
                <ClientProfile />
              </PrivateRouteClient>
            }
          />

          <Route
            path="/walkerprofile"
            element={
              <PrivateRouteUser routeLogin="/login">
                <WalkerProfile />
              </PrivateRouteUser>
            }
          />

          <Route
            path="/datesclient"
            element={
              <PrivateRouteClient routeLogin="/login">
                <DatesClient />
              </PrivateRouteClient>
            }
          />

          <Route
            path="/dateswalker"
            element={
              <PrivateRouteWalker routeLogin="/login">
                <DatesWalker />
              </PrivateRouteWalker>
            }
          />

          <Route path="/register" element={<Register />} />
          <Route path="/registerWalker" element={<RegisterWalker />} />
          <Route path="/registerSuccess" element={<RegisterSuccess />} />

          <Route
            path="/askForDate"
            element={
              <PrivateRouteClient routeLogin="/login">
                <AskForDate />
              </PrivateRouteClient>
            }
          />

          {/* Rutas Administrador */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/reservedtours"
            element={
              <PrivateRoute routeLogin="/admin">
                <ReservedTours />
              </PrivateRoute>
            }
          />
          <Route
            path="/walkerregistration"
            element={
              <PrivateRoute routeLogin="/admin">
                <WalkerRegistration />
              </PrivateRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <PrivateRoute routeLogin="/admin">
                <Reports />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
