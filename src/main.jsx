import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Learn from "./pages/Learn.jsx";
import Golang from "./pages/Golang/Golang.jsx";
import Gogin from "./pages/GoGin/Gogin.jsx";
import Microservices from "./pages/Microservices/Microservices.jsx";
import Layout from "./components/Layout.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/golang" element={<Golang />} />
          <Route path="/gogin" element={<Gogin />} />
          <Route path="/microservices" element={<Microservices />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
