import { db } from "../firebase.config";
import { useState, useEffect } from "react";
import axios from "axios";

import { collection, addDoc } from "firebase/firestore";

const AddRecipe = () => {
  const [data, setData] = useState({
    name: "",
    author: "",
    description: "",
    country: "",
    imagelink: "",
    ingredients: ["Enter ingredient"],
    quantities: ["Enter Quantity"],
    instruction: "",
  });

  const [countries, setCountries] = useState("");

  const recipesFetchRef = collection(db, "recipes");

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
      console.log(res.data);
    });
  }, []);

  const changeCountry = (e) => {
    const correctCountry = countries.find(
      (origin) => origin.name === e.target.value
    );
    setData({
      ...data,
      country: correctCountry.alpha3Code,
      flag: correctCountry.flag,
      countryname: correctCountry.name,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !data.name ||
      !data.description ||
      !data.country ||
      !data.imagelink ||
      !data.ingredients ||
      !data.quantities ||
      !data.instruction
    ) {
      alert("Please fill out all fields");
      return;
    }

    addDoc(recipesFetchRef, data);

    setData({
      name: "",
      author: "",
      description: "",
      country: "",
      imagelink: "",
      ingredients: [""],
      quantities: [0],
      instruction: "",
    });
  };

  const handleIngredient = (e, i) => {
    const ingredientsClone = [...data.ingredients];

    ingredientsClone[i] = e.target.value;

    setData({
      ...data,
      ingredients: ingredientsClone,
    });
  };

  const handleQuantity = (e, i) => {
    const quantitiesClone = [...data.quantities];

    quantitiesClone[i] = e.target.value;

    setData({
      ...data,
      quantities: quantitiesClone,
    });
  };

  const handleIngredientsCount = () => {
    setData({
      ...data,
      ingredients: [...data.ingredients, ""],
      quantities: [...data.quantities, ""],
    });
  };

  return (
    <div className="outshell">
      <div className="container">
        <div>
          <h3> Add new recipe:</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-25">
              <label for="name"> Name</label>
            </div>
            <div className="col-30">
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="author">Author</label>
            </div>
            <div className="col-30">
              <input
                type="text"
                id="author"
                name="author"
                value={data.author}
                onChange={(e) => setData({ ...data, author: e.target.value })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="country">Recipe is from</label>
            </div>
            <div className="col-30">
              <select name="country" id="country" onChange={changeCountry}>
                {countries &&
                  countries.map((origin) => (
                    <option key={origin.name}>{origin.name}</option>
                  ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="description">Description</label>
            </div>
            <div className="col-30">
              <textarea
                id="description"
                name="description"
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="imagelink">Image link</label>
            </div>
            <div className="col-30">
              <input
                type="text"
                id="imagelink"
                name="imagelink"
                value={data.imagelink}
                onChange={(e) =>
                  setData({ ...data, imagelink: e.target.value })
                }
              />
            </div>
          </div>

          <label id="ingredients">Ingredients</label>

          <div className="ing col-25">
            <div className="qua1">
              <label for="quantity">Quantity</label>

              {data.quantities.map((quantity, i) => (
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  key={i}
                  value={quantity}
                  onChange={(e) => handleQuantity(e, i)}
                />
              ))}
            </div>

            <div className="ing1">
              <label for="ingredient">Ingredient</label>

              {data.ingredients.map((ingredient, i) => (
                <input
                  type="text"
                  id="ingredient"
                  name="ingredient"
                  key={i}
                  value={ingredient}
                  onChange={(e) => handleIngredient(e, i)}
                />
              ))}
            </div>
          </div>

          <div className="row col-30">
            <button
              className="btn btn-outline-success btn-lg"
              type="button"
              onClick={handleIngredientsCount}
            >
              add more
            </button>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="instructions">Instructions</label>
            </div>
            <div className="col-30">
              <textarea
                id="instructions"
                name="instructions"
                value={data.instruction}
                onChange={(e) =>
                  setData({ ...data, instruction: e.target.value })
                }
              />
            </div>
          </div>

          <div className="row col-30">
            <input className="btn" type="submit" value="Post recipe" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
