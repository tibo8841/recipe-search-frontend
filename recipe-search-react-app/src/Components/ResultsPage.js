import { searchRecipes } from "./Networking";

export default function ResultsPage() {
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");
  const cuisine = params.get("cuisine");
  const diet = params.get("diet");

  // searchRecipes(search, cuisine, diet);

  function resultsString() {
    let searchTerms = "";
    if (search) {
      searchTerms += ` "${search}"`;
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
