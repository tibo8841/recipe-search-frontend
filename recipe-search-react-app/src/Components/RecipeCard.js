import Grid from "@mui/material/Grid";

export default function RecipeCard(props) {
  const {
    name,
    recipeLink,
    imageLink,
    ingredients,
    cuisines,
    diets,
    minsTaken,
  } = props;
  return (
    <div className="recipe-card">
      <Grid container spacing={2}>
        <Grid item>
          <img
            alt="recipe"
            src={
              imageLink
                ? imageLink
                : "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
            }
            style={{ height: 200 }}
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <h2>{name ? name : "Name"}</h2>
              <p>
                Time: {minsTaken ? minsTaken : "??"} mins •{" "}
                {cuisines ? cuisines : "Cuisine"}, {diets ? diets : "Diet"},{" "}
                {ingredients ? ingredients : "Ingredient"}
              </p>
              <p>
                {ingredients
                  ? ingredients
                  : "Ingredient, Ingredient, Ingredient"}
              </p>
            </Grid>
            <Grid item>
              <a href={recipeLink} target="_blank" rel="noreferrer">
                {recipeLink ? recipeLink : "Link"}
              </a>
            </Grid>
          </Grid>
          <Grid item>
            <p>❤️</p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
