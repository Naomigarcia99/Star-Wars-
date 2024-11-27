import "./assets/App.css";
import Logo from "./assets/images/sw2.png";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import Register from "./components/register";
import StarshipDetails from "./components/starshipsDetails";
import StarshipsList from "./components/starshipsList";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <>
      <div className="mb-5 flex justify-center">
        <img src={Logo} alt="Logo star wars" width={200} />
      </div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <StarshipsList />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/starship/:starshipName" element={<StarshipDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
