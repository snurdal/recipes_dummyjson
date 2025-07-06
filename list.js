const url = "https://dummyjson.com/recipes?limit=0"

// Dış dünyadan bilgi çekme fonksiyonu: fetch
// Bu fonksiyon Promise adı verilen bir asenkron fonksiyondur. then yapıları içerisinde farklı bir zaman aldığı vardır, parantez dışına veri vermez.

// Belirtilen url tarafındaki metin bilgisi (kaynağı göster) çekilir.
// .json: Okunan sayfa kaynağının metin formatını object yapıya dönüştürür.
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        document.getElementById('total').innerText = data['total']
        document.getElementById('limit').innerText = data['limit']
        document.getElementById('skip').innerText = data['skip']
        const recipes = data['recipes']
        const recipesContainer = document.getElementById('recipes')
        recipesContainer.innerHTML = ''
        for (const recipe of recipes) {
            recipesContainer.innerHTML += `<div class="col">
                <div class="card h-100">
                    <div class="card-header">
                        <h5 class="text-muted">${recipe.name}</h5>
                        <small class="text-muted">
                            ${recipe.cuisine} |
                            ${recipe.difficulty} |
                            ${recipe.mealType.join(', ')}
                        </small>
                    </div>
                    <img src="${recipe.image}" class="img-fluid" alt="${recipe.name}" />
                    <div class="card-body">
                        <h5>Ingredients:</h5>
                        <ul>
                            <li>${recipe.ingredients.join('</li><li>')}</li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <strong class="text-muted">${recipe.tags.join(', ')}</strong>
                    </div>
                </div>
            </div>`
        }
    })
    .catch((err) => console.error(err))

