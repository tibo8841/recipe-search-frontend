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
                {cuisines[0] ? cuisines[0] : "Cuisine"},{" "}
                {diets[0] ? diets[0] : "Diet"}
              </p>
              <p>
                {ingredients[0]
                  ? `${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}, ${ingredients[3]}, ${ingredients[4]} `
                  : "Ingredient, Ingredient, Ingredient, Ingredient, ingredient"}
              </p>
            </Grid>
            <Grid item>
              <a href={recipeLink} target="_blank" rel="noreferrer">
                {recipeLink ? recipeLink : "Link"}
              </a>
            </Grid>
          </Grid>
          {/* <Grid item>
            <p>❤️</p>
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}
