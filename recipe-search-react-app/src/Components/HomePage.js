import Grid from "@mui/material/Grid";

export default function HomePage() {
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
    </div>
  );
}
