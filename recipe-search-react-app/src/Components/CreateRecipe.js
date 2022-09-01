import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";

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
    if (name !== "") {
      setIsNameSaved(true);
    }
  }

  function handleRecipeLinkChange(e) {
    setRecipeLink(e.target.value);
  }

  function handleSaveRecipeLink() {
    if (recipeLink !== "") {
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
        {!isNameSaved ? (
          <TextField
            id="name"
            name="name"
            placeholder="Name of the recipe"
            margin="normal"
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
        ) : (
          <p>{name}</p>
        )}
        {!isRecipeLinkSaved ? (
          <TextField
            id="link"
            name="link"
            placeholder="Link to the recipe"
            margin="normal"
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
        ) : (
          <a href={recipeLink} target="_blank" rel="noreferrer">
            {recipeLink}
          </a>
        )}
        {!isImageLinkSaved ? (
          <TextField
            id="image-link"
            name="image-link"
            placeholder="Link to the thumbnail image"
            margin="normal"
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
        ) : (
          <img className="recipe-image" src={imageLink} alt="recipe" />
        )}
      </Container>
    </div>
  );
}
