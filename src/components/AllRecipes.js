import React from "react";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import Grid from "@mui/joy/Grid";
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
          };
        })
      );

      console.log(snapshot);
    });
  }, []);

  const search = (e) => {
    setSearchBox(e.target.value);
  };

  return (
    <>
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <TextField label="Search" sx={{ width: 300 }} onChange={search} />
      </Box>

      <Grid
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
                <>
                  <RecipeCard key={recipe.id} recipe={recipe} />
                </>
              );
            })}
      </Grid>
    </>
  );
};

export default AllRecipes;
