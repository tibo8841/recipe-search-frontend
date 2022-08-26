import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Box from "@mui/system/Box";
import Container from "@mui/material/Container";
import DropDown from "./DropDown";
import { useState } from "react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");

  function handleSubmit() {
    const params = new URLSearchParams({});
    if (searchTerm) {
      params.append("search", searchTerm);
    }
    if (cuisine) {
      params.append("cuisine", cuisine);
    }
    if (diet) {
      params.append("diet", diet);
    }
    console.log(params.toString());
  }

  function chooseCuisine(cuisine) {
    setCuisine(cuisine.value);
  }

  function chooseDiet(diet) {
    setDiet(diet.value);
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
          placeholder="Search for ingredient or name of dish"
          fullWidth
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

        <Grid container spacing={2} marginTop="1%">
          <Grid item xs={3}>
            <DropDown type="cuisine" selectType={chooseCuisine} />
          </Grid>
          <Grid item xs={3}>
            <DropDown type="diet" selectType={chooseDiet} />
          </Grid>
          <Grid item xs={3}>
            <button onClick={handleSubmit}>test button</button>
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
