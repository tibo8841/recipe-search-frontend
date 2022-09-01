import Grid from "@mui/material/Grid";

export default function RecipeCard(props) {
  const { name, recipeLink, imageLink, ingredients, cuisines, diets } = props;
  return (
    <div className="recipe-card">
      <Grid container spacing={2}>
        <Grid item>
          <img
            alt="complex"
            src="https://images.kitchenstories.io/wagtailOriginalImages/R2568-photo-final-_0.jpg"
            style={{ height: 200 }}
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <p>Standard license</p>
              <p>Full resolution 1920x1080 • JPEG</p>
              <p>ID: 1030114</p>
            </Grid>
            <Grid item>
              <p>Remove</p>
            </Grid>
          </Grid>
          <Grid item>
            <p>$19.00</p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
