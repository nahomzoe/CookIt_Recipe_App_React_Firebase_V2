import React from "react";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/joy/Grid";

import { collection, onSnapshot } from "firebase/firestore";

const SingleRecipe = () => {
  const recipesFetchRef = collection(db, "recipes");
  const [recipe, setRecipe] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    onSnapshot(recipesFetchRef, (snapshot) => {
      const singleRecipe = snapshot.docs.find((doc) => doc.id === id);
      setRecipe({
        id: singleRecipe.id,
        viewing: false,
        ...singleRecipe.data(),
        //title: doc.data().title.toUpperCase()
      });
      //setRecipes(recipes);
      console.log(singleRecipe);
    });
  }, []);

  return (
    <>
      <h2 className="si-name">{recipe.name}</h2>
      {/* <div className="single-card-container "> */}
      <Grid
        container
        spacing={{ xs: 1, md: 24 }}
        columns={{ xs: 1, sm: 12, md: 19, xl: 24 }}
        margin={"auto"}
      >
        <Grid item xs={1} sm={2} md={4} sx={{ ml: 2 }}>
          <div className="single-wrapper">
            <div className="card front-face">
              <img src={recipe.imagelink} />
            </div>
          </div>
        </Grid>
        {/* <div className="detail"> */}
        <Grid item xs={2} sm={12} md={14} sx={{ ml: 2 }}>
          <div className="info">
            <h3>Author:</h3> {recipe.author}
            {/* <img src={recipe.flag} alt="Flag" /> */}
          </div>
          <div className="info">
            {" "}
            <h3>Recipe is from:</h3>
            {recipe.countryname}
          </div>
          <div className="info">
            {" "}
            <h3>Description:</h3>
            {recipe.description}
          </div>
          <div className="ingredients">
            <div className="info">
              <h3>Quantity:</h3>
              <ul>
                {recipe.quantities &&
                  recipe.quantities.map((qua) => <li key={id}>{qua}</li>)}
              </ul>
            </div>

            <div className="info">
              <h3>Ingredient:</h3>
              <ul>
                {recipe.ingredients &&
                  recipe.ingredients.map((ing) => <li key={id}>{ing}</li>)}
              </ul>
            </div>
          </div>
          <div className="info">
            {" "}
            <h3>Instruction:</h3>
            {recipe.instruction}
          </div>
          {/* </div> */}
        </Grid>
      </Grid>
      {/* </div> */}
    </>
  );
};

export default SingleRecipe;
