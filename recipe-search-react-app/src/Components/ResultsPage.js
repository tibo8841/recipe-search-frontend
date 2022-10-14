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
  const [ingredientsArr, setIngredientsArr] = useState([]);
  const [cuisinesArr, setCuisinesArr] = useState([]);
  const [dietsArr, setDietsArr] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      let result = await getRecipes(params);
      console.log(result);
      setRecipes(result.Recipes);
      setIngredientsArr(result.Ingredients);
      setCuisinesArr(result.Cuisines);
      setDietsArr(result.Diets);
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
          : recipes.map((recipe, index) => (
              <RecipeCard
                name={recipe.name}
                recipeLink={recipe.link}
                imageLink={recipe.picture}
                ingredients={ingredientsArr[index]}
                cuisines={cuisinesArr[index]}
                diets={dietsArr[index]}
                minsTaken={recipe.mins_taken}
              />
            ))}
      </Container>
    </div>
  );
}
