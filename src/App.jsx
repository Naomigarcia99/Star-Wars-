import "./assets/App.css";
import Logo from "./assets/images/sw_logo.png";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import StarshipDetails from "./components/starshipsDetails";
import StarshipsList from "./components/starshipsList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="mb-5 flex justify-center">
        <img src={Logo} alt="Logo star wars" />
      </div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<StarshipsList />} />
        <Route path="/starship/:starshipName" element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
