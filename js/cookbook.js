const cardContainer = document.querySelector("#card-container");
const fullRecipeContainer = document.querySelector("#full-recipe-container");
const searchContainer = document.querySelector("#search-container");
const tagContainer = document.querySelector("#tag-container");

//header click event
document
  .querySelector("header .material-icons.large")
  .addEventListener("click", () => {
    location.hash = "#";
  });

//Function to get random Integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Function to create new card
function createCard(cardData) {
  const card = document.createElement("div");
  const cimage = document.createElement("div");
  const title = document.createElement("h5");
  const contents = document.createElement("div");
  const actions = document.createElement("div");

  card.classList.add("card");

  cimage.classList.add("card-image");
  const img = document.createElement("img");
  img.src = `./images/${getRandomInt(1, 29)}.jpg`;
  cimage.appendChild(img);

  title.innerText = cardData.name;

  contents.classList.add("card-content");
  contents.appendChild(title);

  cardData.tags.forEach((tag) => {
    const tagLink = document.createElement("a");
    tagLink.innerText = "#" + tag;
    tagLink.href = "#tags/" + tag;

    contents.appendChild(tagLink);
  });

  actions.classList.add("card-action");
  const link = document.createElement("a");
  link.innerText = "Open Recipe";
  link.classList.add("waves-effect", "waves-light", "btn", "orange");
  link.href = "#" + cardData.id;
  actions.appendChild(link);

  card.appendChild(cimage);
  card.appendChild(contents);
  card.appendChild(actions);

  return card;
}

//Function to filter recipe by tag
function filterRecipeByTag(tag) {
  tagContainer.innerHTML = "";

  const filteredRecipeData = recipeData.filter((recipe) =>
    recipe.tags.includes(tag)
  );

  filteredRecipeData.forEach((filteredRecipe) => {
    const card = createCard(filteredRecipe);
    tagContainer.appendChild(card);
  });

  console.log(filteredRecipeData);
}

//Function to render recipe
function renderRecipe() {
  const id = location.hash.replace("#", "");
  const recipe = recipeData.find((r) => r.id === id);

  fullRecipeContainer.innerHTML = "";

  const wrapper = document.createElement("div");
  const card = document.createElement("div");
  const cimage = document.createElement("div");
  const title = document.createElement("h3");
  const contents = document.createElement("div");

  wrapper.classList.add("full-recipe-wrapper");

  title.innerText = recipe.name;

  cimage.classList.add("card-image");
  const img = document.createElement("img");
  img.src = `./images/${getRandomInt(1, 29)}.jpg`;
  cimage.appendChild(img);

  contents.classList.add("card-content");

  //Ingredient List
  const ingredientTitle = document.createElement("h4");
  ingredientTitle.textContent = "Ingredients";
  const ingredientList = document.createElement("ul");
  recipe.ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    ingredientList.append(listItem);
  });

  const p = document.createElement("p");
  p.innerText = recipe.instructions;
  const h4Instructions = document.createElement("h4");
  h4Instructions.innerText = "Instructions";

  //append
  contents.append(h4Instructions, p, ingredientTitle, ingredientList);

  card.classList.add("card");
  card.appendChild(cimage);
  card.appendChild(contents);

  //Back Button
  const backLink = document.createElement("a");
  backLink.href = "#";
  backLink.classList.add("waves-effect", "waves-light", "orange");
  backLink.style.padding = "10px";
  backLink.textContent = "Back";

  //append
  wrapper.append(backLink, title, card);
  fullRecipeContainer.appendChild(wrapper);
}

//Function to draw recipes on screen
function drawRecipe() {
  cardContainer.innerHTML = "";

  recipeData.forEach((recipe) => {
    const recipeCard = createCard(recipe);
    cardContainer.append(recipeCard);
  });
}

// Function to handle the route
function handleRoute(e) {
  e.preventDefault();
  if (location.hash === "") {
    drawRecipe();
    cardContainer.style.display = "flex";
    fullRecipeContainer.style.display = "none";
    tagContainer.style.display = "none";
  } else if (location.hash.includes("tags")) {
    const tag = location.hash.split("/")[1];
    filterRecipeByTag(tag);

    cardContainer.style.display = "none";
    fullRecipeContainer.style.display = "none";
    tagContainer.style.display = "flex";
  } else {
    renderRecipe();
    cardContainer.style.display = "none";
    tagContainer.style.display = "none";

    fullRecipeContainer.style.display = "flex";
  }
}

//------on load events--------

window.addEventListener("load", handleRoute);
window.addEventListener("hashchange", handleRoute);
