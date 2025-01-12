const apiKey = 'API_KEY_HERE';
const searchInputField = document.getElementById("searchbar");
const resultDiv = document.getElementById('results');

async function search(query){
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`);
    const data = await response.json(); // get result in json format
    displayRecipes(data.results);
}

function displayRecipes(recipes) {
    resultDiv.innerHTML = '';  // clear previous results

    // Check if recipes array is empty
    if (recipes.length === 0) {
        resultDiv.innerHTML = `<p>No recipes found. Try searching for something else!</p>`;
        return;
    }

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}" />
            <p><a href="https://spoonacular.com/recipes/${recipe.title.replace(/\s/g, "-")}-${recipe.id}" target="_blank">View Recipe</a></p>
        `;
        resultDiv.appendChild(recipeElement);
    });
}

document.getElementById('searchbtn').addEventListener('click', () => {
    const query = searchInputField.value;
    if(query) search(query);
});