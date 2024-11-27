import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetError } from "../slices/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(resetError());
    dispatch(loginUser({ email, password }));
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mt-24">
        <input
          type="email"
          placeholder="  Email"
          className="rounded-full text-black px-2 w-56 shadow-lg shadow-orange-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="my-8">
        <input
          type="password"
          placeholder="  Password"
          className="rounded-full text-black px-2 w-56 shadow-lg shadow-orange-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="rounded-full shadow-inner shadow-orange-300"
      >
        {loading ? "Iniciando sesión..." : "Iniciar sesión"}
      </button>
      {error && <p className="font-semibold text-orange-300 mt-16">{error}</p>}
    </form>
  );
}
