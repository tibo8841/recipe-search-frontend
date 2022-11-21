import "./App.css";
import HomePage from "./Components/HomePage";
import ResultsPage from "./Components/ResultsPage";
import SavedRecipes from "./Components/SavedRecipes";
import CreateRecipe from "./Components/CreateRecipe";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="saved-recipes" element={<SavedRecipes />} />
        <Route path="create-recipe" element={<CreateRecipe />} />
        <Route path="login" element={<Login setUser={setUser} user={user} />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
