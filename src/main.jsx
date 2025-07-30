import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Movie } from "./pages/movie/Movie";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<Movie />} path="/movie" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
