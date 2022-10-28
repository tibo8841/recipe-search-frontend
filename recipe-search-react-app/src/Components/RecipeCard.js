import Grid from "@mui/material/Grid";
import { useState } from "react";

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
  const [visible, setVisible] = useState("hidden");

  function showCard() {
    setVisible("visible");
  }

  return (
    <div className="recipe-card" style={{ visibility: visible }}>
      <Grid container spacing={2}>
        <Grid item>
          <img
            alt="recipe"
            src={
              imageLink
                ? imageLink
                : "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
            }
            onLoad={showCard}
            style={{ height: "25vh" }}
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <h2>{name ? name : "Name"}</h2>
              <p>
                Time: {minsTaken ? minsTaken : "??"} mins •{" "}
                {cuisines[0] ? cuisines[0]["cuisine_name"] : "Cuisine"},{" "}
                {diets[0] ? diets[0]["diet_name"] : "Diet"}
              </p>
              <p>
                {ingredients[0] && ingredients.length > 7
                  ? ingredients
                      .slice(0, 8)
                      .map((ingredient) => `${ingredient["ingredient_name"]}, `)
                  : ingredients[0]
                  ? ingredients.map(
                      (ingredient) => `${ingredient["ingredient_name"]}, `
                    )
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
