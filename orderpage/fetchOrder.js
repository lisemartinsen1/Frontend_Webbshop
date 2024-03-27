const params = new URLSearchParams(window.location.search);
const id = params.get('id');
console.log(id);


$(document).ready(function () {

    const cardInput = $('#cardInput');

    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => {
            

                const id = data.id;
                const img = data.image;
                const title = data.title;
                const description = data.description;
                const price = data.price;
                // Skapa ett nytt "card" div-element och lägg till det i raden
                const cardHTML = createCard(id, img, title, description, price);
                cardInput.append(cardHTML);

                localStorage.setItem('id', id);

        })
        .catch(error => console.error("Error fetching random product:", error));

});

function createCard(id, image, title, description, price) {
    return `
    <div class="row order-1 order-md-2">
    <div class="col-12 col-md-6 d-flex flex-column align-items-center mb-3">
        <img src="${image}" alt="product image" class="img-fluid order-image-size mb-3">
        <h5>$${price}</h5>
    </div>
    <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
        <h3>${title}</h3>
        <p>${description}</p>
    </div>
</div>
          
`;
}