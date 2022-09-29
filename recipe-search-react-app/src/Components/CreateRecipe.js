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

  function addCuisines(cuisine) {
    setCuisines([...cuisines, cuisine]);
  }

  function addDiets(diet) {
    setDiets([...diets, diet]);
  }

  function handleSaveRecipe() {
    saveRecipe(
      recipeName,
      recipeLink,
      imageLink,
      minsTaken,
      ingredients,
      cuisines,
      diets
    );
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
            <MultiSelectDropDown type="cuisine" addToArr={addCuisines} />
          </Grid>
          <Grid item xs={5}>
            <MultiSelectDropDown type="diet" addToArr={addDiets} />
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
        <MultiSelectDropDown type="ingredient" addToArr={addIngredients} />
        <RecipeCard
          name={recipeName}
          recipeLink={recipeLink}
          imageLink={isImageLinkSaved ? imageLink : null}
          ingredients={ingredients}
          cuisines={cuisines}
          diets={diets}
          minsTaken={minsTaken}
        />
        <button onClick={handleSaveRecipe}>save recipe</button>
      </Container>
    </div>
  );
}
