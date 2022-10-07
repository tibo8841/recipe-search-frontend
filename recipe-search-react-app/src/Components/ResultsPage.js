import { useEffect, useMemo } from "react";
import { getRecipes } from "./Networking";

export default function ResultsPage() {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const search = params.get("search");
  const ingredients = params.get("ingredients");
  const cuisine = params.get("cuisine");
  const diet = params.get("diet");

  useEffect(() => {
    getRecipes(params);
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
    </div>
  );
}
