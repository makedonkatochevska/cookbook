# CookBook

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Project Description <br>
  - ⚙️ Technologies Used <br>
  - 🎥 Demo <br>
  - 🔨 Installation <br>
  - 🚀 Usage <br>
  - 📝 Credits <br>
  - 📞 Contact <br>
</details>
---

## 📜 Project Description

The **Cookbook Web Application** is a modern single-page recipe platform that allows users to browse, search, and view various delicious recipes. It provides a smooth and intuitive interface for culinary enthusiasts to explore recipes by name, tags, and instructions. Each recipe includes detailed instructions, a list of ingredients, prep and wait times (if available), and a table with nutritional information.

### 🔑 Key Features:

- Browse all available recipes in a clean card layout.
- Search for recipes by keywords found in:
  - Title
  - Tags
  - Instructions
- Click on a **recipe card** to view full details:
  - Ingredients list
  - Cooking instructions
  - Prep and wait time (shown only if data exists)
  - Nutrition table with key values
- Filter recipes by **clicking on tags** to display other recipes with the same tag.
- Built as a **single-page application** using hash-based routing (`#recipe-id`, `#tags/tag-name`, `#search/keyword`).
- Includes a **Back** button both in the recipe view and in the header/logo area to return to the main recipe list.
- Styled using the **Materialize CSS framework** for a smooth desktop experience.

---

## Technologies Used ⚙️

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
- ![Materialize](https://img.shields.io/badge/Materialize-C2185B?style=flat-square&logo=google&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

---

## Demo 🎥

Check out the live demo of the project hosted on Netlify:

<a href="https://cookbook-js-makedonkatochevska.netlify.app/" target="_blank">Live Demo</a>

Or see the pictures below for a quick preview of the page:

<a href="https://i.imghippo.com/files/SZj2858Xj.png" target="_blank">Tags Filter Page</a>
<a href="https://i.imghippo.com/files/dFNe4383nOg.png" target="_blank">Recipe Page</a>

---

## Installation 🔨

To run these exercises locally, follow these steps:

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/makedonkatochevska/cookbook.git

   ```

2. Open the exercise into the browser of choice.

---

## Usage 🚀

### 🍽 Features & Navigation

1. **View All Recipes**

   - When the app loads or the logo is clicked, all available recipes are displayed in a card layout.
   - Each card includes:
     - A random image
     - The recipe title
     - Related clickable tags
     - A button to open the full recipe

2. **Search for Recipes**

   - Use the search bar to find recipes by entering a keyword.
   - The app filters recipes based on:
     - Recipe title
     - Tags
     - Instructions
   - Matching recipes will be displayed dynamically without reloading the page.

3. **Open Individual Recipe**

   - Click the **Open Recipe** button on any card to view the full recipe.
   - This page includes:
     - Full cooking instructions
     - Ingredient list
     - Prep time and wait time (only shown if available)
     - Nutrition table (e.g., calories, fat, carbs, protein)

4. **Filter by Tags**

   - Click on any tag (e.g., `#dessert`) to view all recipes with the same tag.
   - The app automatically updates the display based on the tag.

5. **Back Navigation**

   - Click the **Back** button on the recipe page or the app’s logo to return to the main recipe view.

6. **Single Page Application (SPA) Behavior**

   - The application uses **hash-based routing**, so no page reloads are needed:
     - `#` → main recipe list
     - `#recipe-id` → single recipe view
     - `#tags/tag-name` → tag filter view
     - `#search/keyword` → search results
   - Content updates dynamically based on the hash in the URL.

7. **Materialize Styling**

   - The interface is styled using the **Materialize CSS framework**.
   - Buttons, cards, and layout are responsive and visually clean.

---

## Credits 📝

This project was developed to demonstrate the usage of **JavaScript**, **CSS**, and **HTML**. The application showcases my ability to build a dynamic **single-page application (SPA)** that interacts with the DOM, implements hash-based routing, and allows users to search and filter through recipes.

- **Recipe Data**: This project uses a mock dataset for recipe information, including title, ingredients, instructions, and nutrition values.

---

## Contact 📞

📫 You can reach me through email at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or follow me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
