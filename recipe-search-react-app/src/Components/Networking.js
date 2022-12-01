// const URL = "http://localhost:3030";
const URL = "https://recipe-search-backend.tibo8841.co.uk";

export async function getLogin(username, password) {
  const result = await fetch(
    `${URL}/login?username=${username}&password=${password}`
  );
  const json = await result.json();
  return json;
}

export async function registerUser(username, password) {
  const userDetails = { username: username, password: password };
  const result = await fetch(`${URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  });
  const json = await result.json();
  return json;
}

export async function startSession(userID) {
  const user = { userID: userID };
  const result = await fetch(`${URL}/sessions`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const json = await result.json();
  return json;
}

export async function endSession() {
  const result = await fetch(`${URL}/sessions`, {
    method: "DELETE",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  const json = await result.json();
  return json;
}

export async function checkSessions() {
  const result = await fetch(`${URL}/sessions`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await result.json();
  return json;
}

export async function getProfile() {
  const result = await fetch(`${URL}/profile`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await result.json();
  return json;
}

export async function getIngredients() {
  const result = await fetch(`${URL}/ingredients`);
  const json = await result.json();
  return json;
}

export async function getCuisines() {
  const result = await fetch(`${URL}/cuisines`);
  const json = await result.json();
  return json;
}

export async function getDiets() {
  const result = await fetch(`${URL}/diets`);
  const json = await result.json();
  return json;
}

export async function getRecipes(resultsString) {
  const result = await fetch(`${URL}/recipes?${resultsString}`);
  const json = await result.json();
  return json;
}

export async function saveRecipe(
  recipeName,
  recipeLink,
  imageLink,
  minsTaken,
  ingredients,
  cuisines,
  diets
) {
  let recipeDetails;

  if (
    (recipeName, recipeLink, imageLink, minsTaken, ingredients, cuisines, diets)
  ) {
    recipeDetails = {
      recipeName: recipeName,
      recipeLink: recipeLink,
      imageLink: imageLink,
      minsTaken: minsTaken,
      ingredients: ingredients,
      cuisines: cuisines,
      diets: diets,
    };
  }

  const result = await fetch(`${URL}/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipeDetails),
  });
  const json = await result.json();
  return json;
}
