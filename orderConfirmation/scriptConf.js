
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
                getEmail();

        })
        .catch(error => console.error("Error fetching random product:", error));

});

function createCard(id, image, title, description, price) {
    return `
        <div class="row">
            <div class="col-4">
                <img src="${image}" alt="product image" class="img-fluid max-size">
            </div>
            <div class="col-4">
                <h3>${title}</h3>
               
            </div>
            <div class="col-4">
                <h5 class="price-size">$${price}</h5>
            </div>
        </div>
    `;
}


function getPrice() {
    const price = localStorage.getItem('price');
    const totalPay = document.getElementById('totalpay');
    totalPay.textContent = `Totalbelopp: $${price}`; 
}


function getEmail() {
    const email = localStorage.getItem('email');
    const sendTo = document.getElementById('send');
    sendTo.textContent = `En bekräftelse kommer att skickas till: ${email}`;
}