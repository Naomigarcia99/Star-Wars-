import "./assets/App.css";
import StarshipDetails from "./components/starshipsDetails";
import StarshipsList from "./components/starshipsList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>STAR WARS</h1>
      <Routes>
        <Route path="/" element={<StarshipsList />} />
        <Route path="/starship/:starshipName" element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
