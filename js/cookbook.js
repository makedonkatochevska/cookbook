const cardContainer = document.querySelector("#card-container");
const fullRecipeContainer = document.querySelector("#full-recipe-container");
const searchContainer = document.querySelector("#search-container");
const tagContainer = document.querySelector("#tag-container");
const filterContainer = document.getElementById("filters");

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

//Function to format time
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return `${hours}h ${minutes}m`;
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

  //Prep time
  if (recipe.preptime > 0) {
    const prepTimeTitle = document.createElement("h4");
    prepTimeTitle.textContent = "PrepTime";
    const prepTimeParagraph = document.createElement("p");
    prepTimeParagraph.textContent = `Prep Time: ${formatTime(recipe.preptime)}`;
    contents.append(prepTimeTitle, prepTimeParagraph);
  }

  //Wait Time
  if (recipe.waittime > 0) {
    const waitTimeTitle = document.createElement("h4");
    waitTimeTitle.textContent = "Wait Time";
    const waitTimeParagraph = document.createElement("p");
    waitTimeParagraph.textContent = `Wait Time: ${formatTime(recipe.waittime)}`;
    contents.append(waitTimeTitle, waitTimeParagraph);
  }

  //Instructions
  const p = document.createElement("p");
  p.innerText = recipe.instructions;
  const h4Instructions = document.createElement("h4");
  h4Instructions.innerText = "Instructions";

  //Nutrition
  const nutritionTitle = document.createElement("h4");
  nutritionTitle.textContent = "Nutrition";
  const nutritionTable = document.createElement("table");
  nutritionTable.innerHTML = `
  <thead>
   <tr>
    <th>Calories</th>
    <th>Fat</th>
    <th>Saturate Fats</th>
    <th>Carbs</th>
    <th>Fiber</th>
    <th>Sugar</th>
    <th>Protein</th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td>${recipe.calories}</td>
    <td>${recipe.fat}</td>
    <td>${recipe.satfat}</td>
    <td>${recipe.carbs}</td>
    <td>${recipe.fiber}</td>
    <td>${recipe.sugar}</td>
    <td>${recipe.protein}</td>
   </tr>
  </tbody>
  `;

  //Ingredient List
  const ingredientTitle = document.createElement("h4");
  ingredientTitle.textContent = "Ingredients";
  const ingredientList = document.createElement("ul");
  recipe.ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    ingredientList.append(listItem);
  });

  //append
  contents.append(
    h4Instructions,
    p,
    nutritionTitle,
    nutritionTable,
    ingredientTitle,
    ingredientList
  );

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

//Function to render search form
function renderSearchForm() {
  //search container
  filterContainer.style.display = "flex";

  //input
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search for a recipe...";
  searchInput.classList.add("search-input");

  //search btn
  const searchBtn = document.createElement("button");
  searchBtn.innerText = "Search";
  searchBtn.style.width = "150px";
  searchBtn.classList.add("waves-effect", "waves-light", "btn", "orange");

  //event for the search btn
  searchBtn.addEventListener("click", () => {
    const searchedValue = searchInput.value.toLowerCase().trim();

    console.log(searchedValue);

    location.hash = "search/" + searchedValue;

    searchInput.value = "";
  });

  filterContainer.append(searchInput, searchBtn);
}

//Search Function
function searchFunction(searchedTerm) {
  searchContainer.innerHTML = "";

  const filteredByTags = recipeData.filter(
    (recipe) =>
      recipe.tags.some((tag) => tag.includes(searchedTerm)) ||
      recipe.name.includes(searchedTerm) ||
      recipe.instructions.includes(searchedTerm)
  );

  filteredByTags.forEach((filteredRecipe) => {
    const filteredCard = createCard(filteredRecipe);
    searchContainer.append(filteredCard);
  });
}

//Function to handle the route
function handleRoute(e) {
  e.preventDefault();
  if (location.hash === "") {
    drawRecipe();
    cardContainer.style.display = "flex";
    fullRecipeContainer.style.display = "none";
    tagContainer.style.display = "none";
    searchContainer.style.display = "none";
  } else if (location.hash.includes("tags")) {
    const tag = location.hash.split("/")[1];
    filterRecipeByTag(tag);
    cardContainer.style.display = "none";
    fullRecipeContainer.style.display = "none";
    tagContainer.style.display = "flex";
    searchContainer.style.display = "none";
  } else if (location.hash.includes("search")) {
    const searchedTag = location.hash.split("/")[1];
    searchFunction(searchedTag);
    cardContainer.style.display = "none";
    fullRecipeContainer.style.display = "none";
    tagContainer.style.display = "none";
    searchContainer.style.display = "flex";
  } else {
    renderRecipe();
    cardContainer.style.display = "none";
    tagContainer.style.display = "none";
    searchContainer.style.display = "none";
    fullRecipeContainer.style.display = "flex";
  }
}

//------on load events--------

window.addEventListener("load", (e) => {
  handleRoute(e);
  renderSearchForm();
});
window.addEventListener("hashchange", handleRoute);
