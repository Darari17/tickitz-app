import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Movie } from "./pages/movie/Movie";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import { RouterLayout } from "./RouterLayout";
import { Payment } from "./pages/payment/Payment";
import { Home } from "./pages/home/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<RouterLayout />}>
          <Route element={<Home />} index />
          <Route element={<Movie />} path="/movie" />
          <Route element={<Payment />} path="/payment" />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
