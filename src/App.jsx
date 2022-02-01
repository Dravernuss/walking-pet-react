import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrincipalPage from "./pages/PrincipalPage/PrincipalPage";
import Login from "./pages/Login/Login";
import "./_App.scss";
import { Register } from "./pages/Register/Register";
import { RegisterWalker } from "./pages/Register/RegisterWalker/RegisterWalker";
import { RegisterSuccess } from "./pages/Register/RegisterSuccess/RegisterSuccess";
import ClientProfile from "./pages/ClientProfile/ClientProfile";
import WalkerProfile from "./pages/WalkerProfile/WalkerProfile";
import DatesClient from "./pages/DatesClient/DatesClient";
import DatesWalker from "./pages/DatesWalker/DatesWalker";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/PrincipalPage" element={<PrincipalPage />} />
          <Route path="/registerWalker" element={<RegisterWalker />} />
          <Route path="/registerSuccess" element={<RegisterSuccess />} />
          <Route path="/ClientProfile" element={<ClientProfile />} />
          <Route path="/WalkerProfile" element={<WalkerProfile />} />
          <Route path="/DatesClient" element={<DatesClient />} />
          <Route path="/DatesWalker" element={<DatesWalker />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
