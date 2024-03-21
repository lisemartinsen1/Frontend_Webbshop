
$(document).ready(function () {
    // Funktion för att skapa ett "card" div-element med slumpmässig personinformation
    function createCard(image, title, description, price) {
        return `

        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
              <div class="card h-100">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${description}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">${price}</small>
                </div>
              </div>
            </div>
        `;
    }

    // Funktion för att lägga till fler "card" divar
    function addCards(numCards) {
        const cardsGroup = $("#cardsRow");
        
        
            fetch(`https://fakestoreapi.com/products?limit=${numCards}`)
                .then(response => response.json())
                .then(data => {
                    for (let x = 0; x < numCards; x++) {
                        const img = data[x].image;
                        const title = data[x].title;
                        const description = data[x].description;
                        const price = data[x].price;
                        // Skapa ett nytt "card" div-element och lägg till det i raden
                        const cardHTML = createCard(img, title, description, price);
                        cardsGroup.append(cardHTML);
                    }
                })
                .catch(error => console.error("Error fetching random product:", error));
    }

    // Anropa funktionen för att lägga till fler "card" divar
    addCards(20);
});