import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/authSlice";
import { auth } from "../credentials";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión: ", error.message);
    }
  };

  return (
    <span
      className="cursor-pointer hover:font-bold hover:text-orange-100"
      onClick={handleLogout}
    >
      Logout
    </span>
  );
};

export default Logout;
