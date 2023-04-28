import React from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import PrivateComponent from "./Private/PrivateComponent";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateComponent />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
