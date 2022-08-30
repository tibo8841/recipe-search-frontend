import "./App.css";
import HomePage from "./Components/HomePage";
import ResultsPage from "./Components/ResultsPage";
import SavedRecipes from "./Components/SavedRecipes";
import CreateRecipe from "./Components/CreateRecipe";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="saved-recipes" element={<SavedRecipes />} />
        <Route path="create-recipe" element={<CreateRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
