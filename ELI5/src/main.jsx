import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Learn from "./pages/Learn.jsx";
import Golang from "./pages/Golang.jsx";
import Gogin from "./pages/Gogin.jsx";
import Microservices from "./pages/Microservices.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/golang" element={<Golang />} />
        <Route path="/gogin" element={<Gogin />} />
        <Route path="/microservices" element={<Microservices />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
