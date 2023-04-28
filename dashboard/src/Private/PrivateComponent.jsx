import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Footer from "../Layouts/Footer";
import Sidebar from "../Layouts/Sidebar";

const PrivateComponent = () => {
  const auth = secureLocalStorage.getItem("adminInfo");
  return auth ? (
    <>
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateComponent;
