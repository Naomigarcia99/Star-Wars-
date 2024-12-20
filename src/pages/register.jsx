import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, resetError } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(resetError());
    await dispatch(registerUser({ email, password, name }));
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="mt-24">
        <input
          type="text"
          placeholder="  Name"
          className="rounded-full text-black px-2 w-56 shadow-lg shadow-orange-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="my-8">
        <input
          type="email"
          placeholder="  Email"
          className="rounded-full text-black px-2 w-56 shadow-lg shadow-orange-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
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
        className="rounded-full mt-8 shadow-inner shadow-orange-300"
      >
        {loading ? "Registering..." : "Register"}
      </button>
      {error && <p className="font-semibold text-orange-300 mt-16">{error}</p>}
    </form>
  );
}
