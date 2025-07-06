// Javascript 'object' Veri Tipi: Anahtar değer ikilisi olarak veriler benzersiz olarak saklanır.

// https://dummyjson.com/recipes/1
const tarif = {
    "id": 1,
    "name": "Classic Margherita Pizza",
    "ingredients": [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
    ],
    "instructions": [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "caloriesPerServing": 300,
    "tags": [
        "Pizza",
        "Italian"
    ],
    "userId": 166,
    "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
    "rating": 4.6,
    "reviewCount": 98,
    "mealType": [
        "Dinner"
    ]
}


const fillRecipeContainer = (recipe) =>{
    const container = document.getElementById('recipe-container')
    container.innerHTML = `<div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="${recipe["image"]}" class="img-fluid rounded-start" alt="${recipe["name"]}">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">${recipe["name"]}</h5>
                                            <p class="card-text"><strong>Prepare Time: </strong>${recipe["prepTimeMinutes"]} min</p>
                                            <p class="card-text"><strong>Cooking Time: </strong>${recipe["cookTimeMinutes"]} min</p>
                                            <p class="card-text">This is a wider card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins
                                                    ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
}

fillRecipeContainer(tarif)