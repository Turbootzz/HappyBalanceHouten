import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Voorwaarden from "../pages/Voorwaarden";
import NoPage from "../pages/NoPage";
// import logo from "../assets/img/react-logo.svg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Home.jsx" element={<Home />} />
        <Route path="Contact.jsx" element={<Contact />} />
        <Route path="Voorwaarden.jsx" element={<Voorwaarden />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
