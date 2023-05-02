import React from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import PrivateComponent from "./Private/PrivateComponent";
import Dashboard from "./Pages/Dashboard";
import Menus from "./Pages/Menus/Menus";
import Menu from "./Pages/Menus/Menu";
import Categories from "./Pages/Blog/Categories/Categories";
import Posts from "./Pages/Blog/Posts/Posts";
import CreatePost from "./Pages/Blog/Posts/CreatePost";
import EditPost from "./Pages/Blog/Posts/EditPost";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateComponent />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />

          {/* BLOG */}
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/create" element={<CreatePost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/post/categories" element={<Categories />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
