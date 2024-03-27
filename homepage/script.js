
let isRotated = false;

function rotateImage() {
    const hamburgerIcon = document.getElementById('hamburger');
    isRotated = !isRotated

    if (isRotated) {
        hamburgerIcon.style.transform = 'rotate(90deg)';
    } else {
        hamburgerIcon.style.transform = 'rotate(0deg)';
    }
};

function toggleSearchBar() {

};


const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for (let i = 0; i < q.length; i++) {
    q[i].addEventListener('click', () => {

        a[i].classList.toggle('a-opened');

        arr[i].classList.toggle('arrow-rotaded');
    });
}



$(document).ready(function () {
    addCards(`https://fakestoreapi.com/products`);

});


// Funktion för att skapa ett "card" div-element med slumpmässig personinformation
function createCard(id, image, title, description, price) {
    return `

        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
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
                <a class="btn btn-outline-dark my-2 order-btn" href="../orderpage/order.html?id=${id}" role="button">Beställ</a>
                
            </div>
        </div>
    </div>
        `;
};


// Funktion för att lägga till fler "card" divar
function addCards(path) {
    const cardsGroup = $("#cardsRow");

    fetch(path)
        .then(response => response.json())
        .then(data => {
            data.forEach(data => {

                const id = data.id;
                const img = data.image;
                const title = data.title;
                const description = data.description;
                const price = data.price;
                // Skapa ett nytt "card" div-element och lägg till det i raden
                const cardHTML = createCard(id, img, title, description, price);
                cardsGroup.append(cardHTML);

            });

        })
        .catch(error => console.error("Error fetching random product:", error));
};

$('#womensCategory').click(function () {

    const womensClothing = encodeURIComponent("women's clothing");
    $("#cardsRow").empty(); // Clear existing cards
    $("#image-div").empty(); // Clear image
    addCards(`https://fakestoreapi.com/products/category/${womensClothing}`);
});

$('#mensCategory').click(function () {

    const mensClothing = encodeURIComponent("men's clothing");
    $("#cardsRow").empty(); // Clear existing cards
    $("#image-div").empty(); // Clear image
    addCards(`https://fakestoreapi.com/products/category/${mensClothing}`);
});

$('#jeweleryCategory').click(function () {

    $("#cardsRow").empty(); // Clear existing cards
    $("#image-div").empty(); // Clear image
    addCards(`https://fakestoreapi.com/products/category/jewelery`);
});

$('#allCategories').click(function () {

    $("#cardsRow").empty(); // Clear existing cards
    $("#image-div").empty(); // Clear image
    addCards(`https://fakestoreapi.com/products`);
});


$('#salj-icon').click(function () {

    $("#cardsRow").empty(); // Clear existing cards
    addImage(); //add the image again
    addCards(`https://fakestoreapi.com/products`);
});

function addImage() {
    const imageDiv = document.getElementById('image-div');

    imageDiv.innerHTML = `
        <img src="https://kvalitetsmagasinet.se/wp-content/blogs.dir/sites/6/2018/07/sommarbild.jpeg"
        class="img-fluid" alt="Bild">
        <div class="overlay-text"> 
            <h3 class="card-title">Nyheter</h3> 
            <div class="btn-wrapper">
                <a href="#" class="btn btn-primary">Upptäck</a> 
            </div> 
        </div>
        `;
};
