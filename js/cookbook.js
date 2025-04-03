const cardContainer = document.querySelector("#card-container");
const fullRecipeContainer = document.querySelector("#full-recipe-container");
const searchContainer = document.querySelector("#search-container");
const tagContainer = document.querySelector("#tag-container");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
  // Exercise 6 here - add ingredient list
  // !!
  const p = document.createElement("p");
  p.innerText = recipe.instructions;
  const h4Instructions = document.createElement("h4");
  h4Instructions.innerText = "Instructions";
  // Exercise 6 - append the new elements here
  // !!
  contents.appendChild(h4Instructions);
  contents.appendChild(p);

  card.classList.add("card");
  card.appendChild(cimage);
  card.appendChild(contents);

  wrapper.appendChild(title);
  wrapper.appendChild(card);

  fullRecipeContainer.appendChild(wrapper);

  // Exercise 5 here - add a back "button"
  // !!
}

// Exercise 1 - draw cards on screen using the
// createCard function.

// Exercise 2 - create a basic router
