import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Box from "@mui/system/Box";
import Container from "@mui/material/Container";
import DropDown from "./DropDown";
import { useState } from "react";

export default function HomePage() {
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");

  function handleSubmit(event) {
    return;
  }

  function chooseCuisine(cuisine) {
    setCuisine(cuisine.value);
  }

  function chooseDiet(diet) {
    setDiet(diet.value);
  }

  return (
    <div>
      <h1>this is the home page, do a search</h1>
      <h3>or click buttons to go places</h3>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <a href="/results">
            <button className="link-button">results</button>
          </a>
        </Grid>
        <Grid item xs={6}>
          <a href="/saved-recipes">
            <button className="link-button">saved recipes</button>
          </a>
        </Grid>
      </Grid>
      <Container maxWidth="md">
        <h1>Search for a recipe!</h1>
        <Box
          component="form"
          sx={{ alignItems: "center" }}
          onSubmit={handleSubmit}
        >
          <TextField
            id="search"
            name="search"
            placeholder="Search for ingredient or name of dish"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RestaurantIcon />
                </InputAdornment>
              ),
              autoComplete: "off",
            }}
          />
        </Box>
        <Grid container spacing={2} marginTop="1%">
          <Grid item xs={3}>
            <DropDown type="cuisine" selectType={chooseCuisine} />
          </Grid>
          <Grid item xs={3}>
            <DropDown type="diet" selectType={chooseDiet} />
          </Grid>
          <Grid item xs={3}>
            <DropDown />
          </Grid>
          <Grid item xs={3}>
            <a href="/results">
              <button className="link-button">Search</button>
            </a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
