import { useEffect, useMemo, useState } from "react";
import { getRecipes } from "./Networking";
import Container from "@mui/material/Container";
import RecipeCard from "./RecipeCard";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      let result = await getRecipes(params);
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

  function navigateHome() {
    navigate("/");
  }

  return (
    <div className="main-content">
      <h1>returning results for{resultsString()}</h1>
      <Container maxWidth="md">
        {loading ? (
          "Loading recipes..."
        ) : recipes[0] ? (
          recipes.map((recipe, index) => (
            <RecipeCard
              name={recipe.name}
              recipeLink={recipe.link}
              imageLink={recipe.picture}
              ingredients={ingredientsArr[index]}
              cuisines={cuisinesArr[index]}
              diets={dietsArr[index]}
              minsTaken={recipe.mins_taken}
            />
          ))
        ) : (
          <div>
            <p>
              Sorry, no recipes found with these parameters, try searching
              again!
            </p>
            <button
              className="link-button"
              onClick={navigateHome}
              style={{ marginTop: "10%" }}
            >
              Search again!
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}
