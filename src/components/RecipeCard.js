import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/joy/Grid";

import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";

const element = <FontAwesomeIcon icon={faTrash} />;
const RecipeCard = ({ recipe }) => {
  const recipesFetchRef = collection(db, "recipes");
  const [recipes, setRecipes] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    onSnapshot(recipesFetchRef, (snapshot) => {
      const singleRecipe = snapshot.docs.find((doc) => doc.id === id);
      setRecipes({
        id: singleRecipe.id,
        viewing: false,
        ...singleRecipe.data(),
        //title: doc.data().title.toUpperCase()
      });
    });
  }, []);

  const removeRecipe = (id) => {
    deleteDoc(doc(db, "recipes", id));
  };
  return (
    <Grid item xs={2} sm={4} md={4} sx={{ ml: 2 }}>
      <div className="wrapper">
        <div className="card front-face">
          <img src={recipe.imagelink} />
        </div>
        <div className="card back-face">
          <div className="remove" onClick={() => removeRecipe(recipe.id)}>
            {" "}
            {element}
          </div>
          <img src={recipe.imagelink} />
          <div className="info">
            <div className="title">{recipe.name}</div>
            <p>{recipe.description}</p>
          </div>
          <Link className="card-link" to={`/allrecipes/${recipe.id}`}>
            See more
          </Link>
        </div>
      </div>
    </Grid>
  );
};

export default RecipeCard;
