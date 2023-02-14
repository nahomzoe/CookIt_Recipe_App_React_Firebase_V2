import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllRecipes from "./components/AllRecipes";
import SingleRecipe from "./components/SingleRecipe";
import Layout from "./UI components/Layout";
import Home from "./UI components/Home";
import AddRecipe from "./components/AddRecipe";
import FormModal from "./components/FormModal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="allrecipes" element={<AllRecipes />} />
          <Route path="allrecipes/:id" element={<SingleRecipe />} />
          <Route path="addrecipe" element={<AddRecipe />} />
          {/* <Route path="form" element={<FormModal />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
