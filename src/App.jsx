import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrincipalPage from "./pages/PrincipalPage/PrincipalPage";
import Login from "./pages/Login/Login";
import "./_App.scss";
import ClientProfile from "./pages/ClientProfile/ClientProfile";
import WalkerProfile from "./pages/WalkerProfile/WalkerProfile";
import DatesClient from "./pages/DatesClient/DatesClient";
import DatesWalker from "./pages/DatesWalker/DatesWalker";
import AdminLogin from "./pagesAdmin/AdminLogin/AdminLogin";
import ReservedTours from "./pagesAdmin/ReservedTours/ReservedTours";
import WalkerRegistration from "./pagesAdmin/WalkerRegistration/WalkerRegistration";
import Reports from "./pagesAdmin/Reports/Reports";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/principalpage" element={<PrincipalPage />} />
          <Route path="/clientprofile" element={<ClientProfile />} />
          <Route path="/walkerprofile" element={<WalkerProfile />} />
          <Route path="/datesclient" element={<DatesClient />} />
          <Route path="/dateswalker" element={<DatesWalker />} />
          {/* Rutas Administrador */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/reservedtours" element={<ReservedTours />} />
          <Route path="/walkerregistration" element={<WalkerRegistration />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
