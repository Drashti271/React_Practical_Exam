import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddBlog from "./pages/AddBlog";
import ViewBlog from "./pages/ViewBlog";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/view_blog" element={<ViewBlog />} />
        <Route path="/add_blog" element={<AddBlog />} />
      </Routes>
    </>
  );
};

export default App;