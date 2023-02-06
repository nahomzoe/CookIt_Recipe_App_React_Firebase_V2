import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllRecipes from "./components/AllRecipes";
import SingleRecipe from "./components/SingleRecipe";
import Layout from "./UI components/Layout";
import Home from "./UI components/Home";
import AddRecipe from "./components/AddRecipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="allrecipes" element={<AllRecipes />} />
          <Route path="allrecipes/:id" element={<SingleRecipe />} />
          <Route path="addrecipe" element={<AddRecipe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
