import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MultiSelectDropDown from "./MultiSelectDropDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [cuisines, setCuisines] = useState([]);
  const [diets, setDiets] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate();

  function handleSubmit() {
    const params = new URLSearchParams({});
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

  function navigateToCreateRecipe() {
    navigate("create-recipe");
  }

  return (
    <div>
      <Container maxWidth="md">
        <h1>Search for a recipe!</h1>
        <p>
          search by selecting one or multiple parameters to filter recipes by
        </p>
        <p>for example, choose pasta as an ingredient and click search</p>
        <MultiSelectDropDown
          type="ingredient"
          addToArr={addIngredients}
          removeFromArr={removeIngredients}
        />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <MultiSelectDropDown
              type="cuisine"
              addToArr={addCuisines}
              removeFromArr={removeCuisines}
            />
          </Grid>
          <Grid item xs={4}>
            <MultiSelectDropDown
              type="diet"
              addToArr={addDiets}
              removeFromArr={removeDiets}
            />
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
          style={{ marginTop: "10%" }}
        >
          Create New Recipe!
        </button>
      </Container>
    </div>
  );
}
