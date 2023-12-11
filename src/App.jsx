import React from "react";
import "./assets/css/App.css";
import { Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AlertPopup from "./components/AlertPopup";
import AdminRoutes from "./routes/AdminRoutes";
import TeacherRoutes from "./routes/TeacherRoutes";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div className="max-w-screen overflow-hidden">
      <AlertPopup />
      <Routes>
        {AdminRoutes}
        {TeacherRoutes}
      </Routes>
    </div>
  );
}

export default App;
