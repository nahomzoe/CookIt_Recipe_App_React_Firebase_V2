import React, { useState, useEffect } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { useSnackbar } from "notistack";
import Grid from "@mui/joy/Grid";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { db } from "../firebase.config";

import axios from "axios";

import { collection, addDoc } from "firebase/firestore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3.5,
};

export default function FormModal() {
  const [data, setData] = useState({
    name: "",
    author: "",
    description: "",
    country: "",
    imagelink: "",
    ingredients: [""],
    quantities: [""],
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Chip
        onClick={handleOpen}
        label="Add new recipe"
        variant="outlined"
        sx={{ ml: 0, mt: 0, color: "whitesmoke" }}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            style={{
              minWidth: "30%",
              borderRadius: "5px",
              border: "#F6F9F3",
              height: "250hv",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              align="center"
              style={{
                Width: "100%",
                height: "3rem",
                background: "#222f3e",
                paddingTop: "0.5rem",
                color: "#fff",
              }}
            >
              Add new recipe:
            </Typography>
            <br />
            <form
            // onSubmit={submitHandler}
            >
              <TextField
                id="outlined-multiline-flexible"
                label="Name"
                multiline
                maxRows={4}
                style={{ width: "100%", marginBottom: "0.6rem" }}
                type="text"
                name="name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <br />
              <TextField
                id="outlined-multiline-static"
                label="Author"
                multiline
                maxRows={4}
                style={{ width: "100%", marginBottom: "0.6rem" }}
                type="text"
                name="author"
                value={data.author}
                onChange={(e) => setData({ ...data, author: e.target.value })}
              />
              <br />
              <FormControl fullWidth sx={{ mb: 1 }}>
                <InputLabel id="demo-simple-select-label">
                  Recipe is from
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  label="Recipe is from"
                  name="country"
                  onChange={changeCountry}
                >
                  {countries &&
                    countries.map((origin) => (
                      <MenuItem value={origin.name}>{origin.name}</MenuItem>
                    ))}
                </Select>
              </FormControl>
              <br />
              <TextField
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
                style={{ width: "100%", marginBottom: "0.6rem" }}
                name="description"
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
              <br />
              <TextField
                id="outlined-multiline-flexible"
                label="Image link"
                multiline
                maxRows={4}
                style={{ width: "100%", marginBottom: "0.6rem" }}
                name="imagelink"
                value={data.imagelink}
                onChange={(e) =>
                  setData({ ...data, imagelink: e.target.value })
                }
              />
              <br />
              <Typography>Ingredients</Typography>
              <br />
              <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                  {data.quantities.map((quantity, i) => (
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Quantity"
                      multiline
                      maxRows={4}
                      style={{ width: "100%", marginBottom: "0.6rem" }}
                      type="text"
                      name="quantity"
                      key={i}
                      value={quantity}
                      onChange={(e) => handleQuantity(e, i)}
                    />
                  ))}
                </Grid>
                <Grid item xs={8}>
                  {data.ingredients.map((ingredient, i) => (
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Ingredient"
                      multiline
                      maxRows={4}
                      style={{ width: "100%", marginBottom: "0.6rem" }}
                      type="text"
                      name="ingredient"
                      key={i}
                      value={ingredient}
                      onChange={(e) => handleIngredient(e, i)}
                    />
                  ))}
                </Grid>
              </Grid>
              <Button
                variant="outlined"
                color="primary"
                value="Submit"
                onClick={handleIngredientsCount}
              >
                Add more
              </Button>
              <br />
              <TextField
                id="outlined-multiline-flexible"
                label="Instructions"
                multiline
                maxRows={4}
                sx={{ width: "100%", mt: 1 }}
                name="instructions"
                value={data.instruction}
                onChange={(e) =>
                  setData({ ...data, instruction: e.target.value })
                }
              />
              <Button
                variant="outlined"
                color="primary"
                value="Submit"
                sx={{ width: "100%", mt: 1 }}
                onClick={handleSubmit}
              >
                Post recipe
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
