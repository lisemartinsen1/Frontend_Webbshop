
let isRotated = false;

function rotateImage() {
    const hamburgerIcon = document.getElementById('hamburger');
    isRotated = !isRotated

    if (isRotated) {
        hamburgerIcon.style.transform = 'rotate(90deg)';
    } else {
        hamburgerIcon.style.transform = 'rotate(0deg)';
    }
}

function toggleSearchBar() {

}


const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for (let i = 0; i < q.length; i++) {
    q[i].addEventListener('click', () => {

        a[i].classList.toggle('a-opened');

        arr[i].classList.toggle('arrow-rotaded');
    });
}


//fetch

//dessa funkar inte som variabler.
/*
const categoryAll = `https://fakestoreapi.com/products?limit=${numCards}`;
const categoryJewelery = `https://fakestoreapi.com/products/category/jewelery?limit=${numCards}`;
const categoryWomen = `https://fakestoreapi.com/products/category/${womensClothing}?limit=${numCards}`;
const categoryMen = `https://fakestoreapi.com/products/category/${mensClothing}?limit=${numCards}`;
*/


//Hämtar elementene som ska få event listeners
const womensCat = document.getElementById('womenCategory');
const mensCat = document.getElementById('menCategory');
const jeweleryCat = document.getElementById('jeweleryCategory');
const allCategories = document.getElementById('allCategories');

// variabler till fetch-url
const womensClothing = encodeURIComponent("women's clothing");
const mensClothing = encodeURIComponent("men's clothing");


//event listeners för kategorierna
womensCat.addEventListener('click', fetchWomens);
const numCards = 20;

function fetchWomens() {
    console.log('womens category');
    fetchItems(`https://fakestoreapi.com/products/category/${womensClothing}?limit=${numCards}`);
}

mensCat.addEventListener('click', fetchMens);

function fetchMens() {
    console.log('mens category');
    fetchItems(`https://fakestoreapi.com/products/category/${mensClothing}?limit=${numCards}`);
}

jeweleryCat.addEventListener('click', fetchJewelary);

function fetchJewelary() {
    console.log('jewelery category');
    fetchItems('https://fakestoreapi.com/products/category/jewelery?limit=${numCards}')
}

allCategories.addEventListener('click', fetchAll);

function fetchAll() {
    console.log('all categories');
    fetchItems('https://fakestoreapi.com/products?limit=${numCards}');
}

// fetchen ligger i en funktion, så inget laddas förrän man kallar på den yttersta funktionen i eventen.

function fetchItems(path) {

    $(document).ready(function () {

        function createCard(id, image, title, description, price) {
            return (
                `<div class="col-6 col-sm-6 col-md-4 col-lg-3">
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
                        <a class="btn btn-outline-dark my-2"href="../orderpage/order.html" role="button">Beställ</a>
                    </div>
                </div>
            </div>`
            );
        }

        function addCards(numCards) {
            const cardsGroup = $("#cardsRow");
            
                fetch(path)
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

}

