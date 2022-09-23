import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import RecipeCard from "./RecipeCard";
import MultiSelectDropDown from "./MultiSelectDropDown";

export default function CreateRecipe() {
  const [name, setName] = useState("");
  const [isNameSaved, setIsNameSaved] = useState(false);
  const [recipeLink, setRecipeLink] = useState("");
  const [isRecipeLinkSaved, setIsRecipeLinkSaved] = useState(false);
  const [imageLink, setImageLink] = useState("");
  const [isImageLinkSaved, setIsImageLinkSaved] = useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSaveName() {
    if (name !== "" && isNameSaved === false) {
      setIsNameSaved(true);
    }
  }

  function handleRecipeLinkChange(e) {
    setRecipeLink(e.target.value);
  }

  function handleSaveRecipeLink() {
    if (recipeLink !== "" && isRecipeLinkSaved === false) {
      setIsRecipeLinkSaved(true);
    }
  }

  function handleImageLinkChange(e) {
    setImageLink(e.target.value);
  }

  function handleSaveImageLink() {
    if (imageLink !== "") {
      setIsImageLinkSaved(true);
    }
  }

  return (
    <div>
      <h1>page to create recipes</h1>
      <Container maxWidth="md">
        <TextField
          id="name"
          name="name"
          placeholder="Name of the recipe"
          margin="dense"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <button className="confirm-button" onClick={handleSaveName}>
                  ✅
                </button>
              </InputAdornment>
            ),
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
            endAdornment: (
              <InputAdornment position="end">
                <button
                  className="confirm-button"
                  onClick={handleSaveRecipeLink}
                >
                  ✅
                </button>
              </InputAdornment>
            ),
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
        <MultiSelectDropDown type="cuisines" />
        <MultiSelectDropDown type="diets" />
        <MultiSelectDropDown type="ingredients" />
        <RecipeCard
          name={name}
          recipeLink={recipeLink}
          imageLink={isImageLinkSaved ? imageLink : null}
        />
      </Container>
    </div>
  );
}
