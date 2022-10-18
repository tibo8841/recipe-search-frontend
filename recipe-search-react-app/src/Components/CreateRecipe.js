import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import RecipeCard from "./RecipeCard";
import MultiSelectDropDown from "./MultiSelectDropDown";
import { saveRecipe } from "./Networking";

export default function CreateRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [recipeLink, setRecipeLink] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [isImageLinkSaved, setIsImageLinkSaved] = useState(false);
  const [minsTaken, setMinsTaken] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [diets, setDiets] = useState([]);
  const [validation, setValidation] = useState();
  const [buttonPressed, setButtonPressed] = useState(false);

  function handleNameChange(e) {
    setRecipeName(e.target.value);
  }

  function handleRecipeLinkChange(e) {
    setRecipeLink(e.target.value);
  }

  function handleImageLinkChange(e) {
    setImageLink(e.target.value);
  }

  function handleSaveImageLink() {
    if (imageLink !== "") {
      setIsImageLinkSaved(true);
    }
  }

  function handleMinsTakenChange(e) {
    setMinsTaken(e.target.value);
  }

  function addIngredients(ingredient) {
    setIngredients([...ingredients, ingredient]);
  }

  function removeIngredients(ingredient) {
    let updatedIngredients = ingredients;
    let index = updatedIngredients.indexOf(ingredient);
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  }

  function addCuisines(cuisine) {
    setCuisines([...cuisines, cuisine]);
  }

  function removeCuisines(cuisine) {
    let updatedCuisines = cuisines;
    let index = updatedCuisines.indexOf(cuisine);
    updatedCuisines.splice(index, 1);
    setCuisines(updatedCuisines);
  }

  function addDiets(diet) {
    setDiets([...diets, diet]);
  }

  function removeDiets(diet) {
    let updatedDiets = diets;
    let index = updatedDiets.indexOf(diet);
    updatedDiets.splice(index, 1);
    setDiets(updatedDiets);
  }

  function handleSaveRecipe() {
    setButtonPressed(true);
    if (validateRecipe() === true) {
      saveRecipe(
        recipeName,
        recipeLink,
        imageLink,
        minsTaken,
        ingredients,
        cuisines,
        diets
      );
      setValidation(true);
    } else {
      setValidation(false);
    }
  }

  function validateRecipe() {
    if (
      recipeName !== "" &&
      recipeLink !== "" &&
      imageLink !== "" &&
      minsTaken !== 0 &&
      ingredients !== [] &&
      cuisines !== [] &&
      diets !== []
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      <h3>page to create recipes</h3>
      <Container maxWidth="md">
        <TextField
          id="name"
          name="name"
          placeholder="Name of the recipe"
          margin="dense"
          fullWidth
          InputProps={{
            autoComplete: "off",
          }}
          onChange={handleNameChange}
        />
        <TextField
          id="link"
          name="link"
          placeholder="Link to the recipe"
          margin="dense"
          fullWidth
          InputProps={{
            autoComplete: "off",
          }}
          onChange={handleRecipeLinkChange}
        />
        <TextField
          id="image-link"
          name="image-link"
          placeholder="Link to the thumbnail image"
          margin="dense"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <button
                  className="confirm-button"
                  onClick={handleSaveImageLink}
                >
                  ✅
                </button>
              </InputAdornment>
            ),
            autoComplete: "off",
          }}
          onChange={handleImageLinkChange}
        />
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <MultiSelectDropDown
              type="cuisine"
              addToArr={addCuisines}
              removeFromArr={removeCuisines}
            />
          </Grid>
          <Grid item xs={5}>
            <MultiSelectDropDown
              type="diet"
              addToArr={addDiets}
              removeFromArr={removeDiets}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="mins"
              name="mins"
              margin="dense"
              fullWidth
              InputProps={{
                inputProps: { min: 0, type: "number" },
                endAdornment: (
                  <InputAdornment position="end">
                    <p>mins</p>
                  </InputAdornment>
                ),
                autoComplete: "off",
              }}
              onChange={handleMinsTakenChange}
            />
          </Grid>
        </Grid>
        <MultiSelectDropDown
          type="ingredient"
          addToArr={addIngredients}
          removeFromArr={removeIngredients}
        />
        <RecipeCard
          name={recipeName}
          recipeLink={recipeLink}
          imageLink={isImageLinkSaved ? imageLink : null}
          ingredients={ingredients}
          cuisines={cuisines}
          diets={diets}
          minsTaken={minsTaken}
        />
        {buttonPressed ? (
          validation ? (
            <h3 style={{ color: "green" }}>recipe saved!</h3>
          ) : (
            <p style={{ color: "red" }}>
              You must fill all the parameters to save the recipe
            </p>
          )
        ) : null}
        <button
          onClick={handleSaveRecipe}
          className="save-button"
          style={{ visibility: validation ? "hidden" : "visible" }}
        >
          save recipe
        </button>
      </Container>
    </div>
  );
}
