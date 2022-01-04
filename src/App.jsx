import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import "./_App.scss";

const App= ()=> {
  return (
    <BrowserRouter>
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
    </div>
  </BrowserRouter>
  );
};

export default App;
