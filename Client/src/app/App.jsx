import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Voorwaarden from "../pages/Voorwaarden";
import NoPage from "../pages/NoPage";
import Inschrijven from "../pages/Inschrijven";
// import logo from "../assets/img/react-logo.svg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="voorwaarden" element={<Voorwaarden />} />
        <Route path="inschrijven" element={<Inschrijven />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
