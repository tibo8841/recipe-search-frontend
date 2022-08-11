import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Box from "@mui/system/Box";
import Container from "@mui/material/Container";

export default function HomePage() {
  function handleSubmit(event) {
    return;
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
      </Container>
    </div>
  );
}
