
const id = localStorage.getItem('id');


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
                localStorage.setItem('price', price);
                
                getPrice();

        })
        .catch(error => console.error("Error fetching random product:", error));

});

function createCard(id, image, title, description, price) {
    return `

                <div class="col-12">
                    <img src="${image}" alt="product image">
                </div>
                <div class="col-12">
                    <h3>${title}</h3>
                </div>
                <div class="col-12">
                    <p>${description}</p>
                </div>
                <div class="col-12">
                    <h5>$${price}</h5>
                </div>
`;
}

function getPrice() {
    const price = localStorage.getItem('price');
    
    const totalPay = document.getElementById('totalpay');
    totalPay.textContent = `Totalbelopp: $${price}`; 
}