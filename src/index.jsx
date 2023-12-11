import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { BrowserRouter, Routes } from "react-router-dom";
import { AlertProvider } from "./contexts/AlertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AlertProvider>
      <BrowserRouter>
        <div className="bg-custom-light-1 min-h-screen">
          <App />
          <Routes></Routes>
        </div>
      </BrowserRouter>
    </AlertProvider>
  </React.StrictMode>,
);
