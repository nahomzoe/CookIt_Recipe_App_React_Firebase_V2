import React from "react";

import { db } from "../firebase.config";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import Grid from "@mui/joy/Grid";
import Divider from "@mui/joy/Divider";
import RecipeCard from "./RecipeCard";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const AllRecipes = () => {
  const recipesFetchRef = collection(db, "recipes");
  const [recipes, setRecipes] = useState([]);
  const [searchBox, setSearchBox] = useState("");

  useEffect(() => {
    onSnapshot(recipesFetchRef, (snapshot) => {
      setRecipes(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewing: false,
            ...doc.data(),
            //title: doc.data().title.toUpperCase()
          };
        })
      );
      //setRecipes(recipes);
      console.log(snapshot);
    });
  }, []);

  const search = (e) => {
    setSearchBox(e.target.value);
  };

  return (
    <>
      {/* <h4>Search for recipe</h4> */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <TextField label="Search" sx={{ width: 300 }} onChange={search} />
      </Box>

      {/* <form className="container-search">
        <input
          type="text"
          name="search"
          placeholder="Search.."
          className="search"
          onChange={search}
          style={{ marginBottom: "3rem" }}
        />
      </form> */}
      {/* <div className="cardGrid"> */}
      <Grid
        // container spacing={2} sx={{ flexGrow: 1, ml: 6 }}
        container
        spacing={{ xs: 14, md: 10 }}
        columns={{ xs: 2, sm: 12, md: 18, xl: 26 }}
        margin={"auto"}
      >
        {recipes &&
          recipes
            .filter((recipe) => {
              if (
                recipe.name
                  .toLowerCase()
                  .includes(searchBox.toLowerCase().trim()) ||
                recipe.author
                  .toLowerCase()
                  .includes(searchBox.toLowerCase().trim())
              ) {
                return recipe;
              }
            })
            .map((recipe) => {
              return (
                // <Grid container xs={3} sx={{ flexGrow: 1 }}>
                <>
                  <RecipeCard key={recipe.id} recipe={recipe} />
                  {/* <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ mr: "-1px" }}
                  /> */}
                </>
                // </Grid>
              );
            })}
      </Grid>
      {/* </div> */}
    </>
  );
};

export default AllRecipes;
