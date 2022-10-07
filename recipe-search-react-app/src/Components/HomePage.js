import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Container from "@mui/material/Container";
import MultiSelectDropDown from "./MultiSelectDropDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cuisines, setCuisines] = useState([]);
  const [diets, setDiets] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate();

  function handleSubmit() {
    const params = new URLSearchParams({});
    if (searchTerm) {
      params.append("search", searchTerm);
    }
    if (ingredients[0]) {
      params.append("ingredients", ingredients[0]["ingredient_name"]);
    }
    if (cuisines[0]) {
      params.append("cuisine", cuisines[0]["cuisine_name"]);
    }
    if (diets[0]) {
      params.append("diet", diets[0]["diet_name"]);
    }
    navigate(`results?${params}`);
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

  function navigateToCreateRecipe() {
    navigate("create-recipe");
  }

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <Container maxWidth="md">
        <h1>Search for a recipe!</h1>
        <TextField
          id="search"
          name="search"
          placeholder="Search by name of dish"
          fullWidth
          style={{ marginBottom: "1%" }}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RestaurantIcon />
              </InputAdornment>
            ),
            autoComplete: "off",
          }}
        />
        <MultiSelectDropDown type="ingredient" addToArr={addIngredients} />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <MultiSelectDropDown type="cuisine" addToArr={addCuisines} />
          </Grid>
          <Grid item xs={4}>
            <MultiSelectDropDown type="diet" addToArr={addDiets} />
          </Grid>
          <Grid item xs={4}>
            <button
              className="link-button"
              onClick={handleSubmit}
              style={{ height: "7vh", marginTop: "1vh", width: "18.9vw" }}
            >
              Search
            </button>
          </Grid>
        </Grid>
        <button
          className="link-button"
          onClick={navigateToCreateRecipe}
          style={{ marginTop: "5%" }}
        >
          Create New Recipe!
        </button>
      </Container>
    </div>
  );
}
