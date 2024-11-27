import { createSlice } from "@reduxjs/toolkit/react";
import { auth } from "../credentials";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { uid, email, displayName } = action.payload;
      state.user = { uid, email, displayName };
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.error = null;
    },
    resetError(state) {
      state.error = null;
    },
  },
});

export const { setUser, setLoading, setError, logout, resetError } =
  authSlice.actions;
export default authSlice.reducer;

export const registerUser =
  ({ email, password, name }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      if (!name || name.trim() === "") {
        throw { code: "auth/missing-name" };
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      const { uid, email: userEmail, displayName } = userCredential.user;

      dispatch(setUser({ uid, email: userEmail, displayName }));
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case "auth/missing-name":
          errorMessage = "El nombre es obligatorio.";
          break;
        case "auth/email-already-in-use":
          errorMessage = "El correo ya está registrado.";
          break;
        case "auth/invalid-email":
          errorMessage = "Correo inválido.";
          break;
        case "auth/weak-password":
          errorMessage = "La contraseña es muy débil.";
          break;
        case "auth/missing-password":
          errorMessage = "Indique una contraseña.";
          break;
        default:
          errorMessage = "Error al registrarse. Inténtalo de nuevo.";
      }
      dispatch(setError(errorMessage));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { uid, email: userEmail, displayName } = userCredential.user;

      dispatch(setUser({ uid, email: userEmail, displayName }));
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "Correo no registrado.";
          break;
        case "auth/wrong-password":
          errorMessage = "Contraseña incorrecta.";
          break;
        case "auth/missing-password":
          errorMessage = "Indique una contraseña.";
          break;
        case "auth/invalid-email":
          errorMessage = "Correo incorrecto.";
          break;
        case "auth/invalid-credential":
          errorMessage = "Datos incorrectos.";
          break;
        default:
          errorMessage = "Error al iniciar sesión. Inténtalo de nuevo.";
      }
      dispatch(setError(errorMessage));
    } finally {
      dispatch(setLoading(false));
    }
  };
