
$(document).ready(function () {
    // Funktion för att skapa ett "card" div-element med slumpmässig personinformation
    function createCard(id, image, title, description, price) {
        return `

        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title ">${title}</h5>
            </div>
            <div class="card-footer d-flex flex-column align-items-center">

                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading${id}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse${id}" aria-expanded="false"
                                aria-controls="flush-collapse${id}">
                                Mer info
                            </button>
                        </h2>

                        <div id="flush-collapse${id}" class="accordion-collapse collapse"
                            aria-labelledby="flush-heading${id}" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">${description}</div>
                        </div>
                    </div>
                </div>
                <small class="text-muted">$${price}</small>
                <a class="btn btn-outline-dark my-2" href="orderpage\order.html" role="button">Beställ</a>
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
                        const id = data[x].id;
                        const img = data[x].image;
                        const title = data[x].title;
                        const description = data[x].description;
                        const price = data[x].price;
                        // Skapa ett nytt "card" div-element och lägg till det i raden
                        const cardHTML = createCard(id, img, title, description, price);
                        cardsGroup.append(cardHTML);
                    }
                })
                .catch(error => console.error("Error fetching random product:", error));
    }

    // Anropa funktionen för att lägga till fler "card" divar
    addCards(20);
});