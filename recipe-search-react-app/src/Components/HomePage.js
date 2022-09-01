import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Container from "@mui/material/Container";
import DropDown from "./DropDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");

  const navigate = useNavigate();

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
    navigate(`results?${params}`);
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
          <Grid item xs={4}>
            <DropDown type="cuisine" selectType={chooseCuisine} />
          </Grid>
          <Grid item xs={4}>
            <DropDown type="diet" selectType={chooseDiet} />
          </Grid>
          <Grid item xs={4}>
            <button className="link-button" onClick={handleSubmit}>
              Search
            </button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
