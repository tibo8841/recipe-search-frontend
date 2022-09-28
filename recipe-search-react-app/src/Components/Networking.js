const URL = "https://recipe-search-backend-production.up.railway.app";

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
  await checkSessions();
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
  return json.response;
}

export async function searchRecipes(search, cuisine, diet) {
  const result = await fetch(`${URL}/`);
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
