import { useEffect, useMemo, useState } from "react";
import { getRecipes } from "./Networking";
import Container from "@mui/material/Container";
import RecipeCard from "./RecipeCard";

export default function ResultsPage() {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const search = params.get("search");
  const ingredients = params.get("ingredients");
  const cuisine = params.get("cuisine");
  const diet = params.get("diet");
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      let result = await getRecipes(params);
      setRecipes(result.Recipes);
      setLoading(false);
    };
    fetchRecipes();
  }, [params]);

  function resultsString() {
    let searchTerms = "";
    if (search) {
      searchTerms += ` "${search}"`;
    }
    if (ingredients) {
      searchTerms += ` "${ingredients}"`;
    }
    if (cuisine) {
      searchTerms += ` "${cuisine}"`;
    }
    if (diet) {
      searchTerms += ` "${diet}"`;
    }
    return searchTerms;
  }

  return (
    <div>
      <h1>returning results for{resultsString()}</h1>
      <Container maxWidth="md">
        {loading
          ? "Loading recipes"
          : recipes.map((recipe) => (
              <RecipeCard
                name={recipe.name}
                recipeLink={recipe.link}
                imageLink={recipe.picture}
                ingredients={recipe.ingredient_id}
                cuisines={recipe.cuisine_id}
                diets={recipe.diet_id}
                minsTaken={recipe.mins_taken}
              />
            ))}
      </Container>
    </div>
  );
}
