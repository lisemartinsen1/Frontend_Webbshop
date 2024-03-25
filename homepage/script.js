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

for(let i = 0; i < q.length; i++){
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
                <a class="btn btn-outline-dark my-2 order-btn" href="../orderpage/order.html" role="button">Beställ</a>
                
            </div>
        </div>
    </div>
        `;
    }

    
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

                    $('.order-btn').click(function(event) {
                     // event.preventDefault();

                      let card = $(this).closest('.card')

                      let productImg = card.find('img.card-img-top').attr('src');
                      let productTitle = card.find('h5.card-title').text();
                      let productDescr = card.find('.accordion-body').text();
                      let productPrice = card.find('small.text-muted').text();

                      localStorage.setItem('image', productImg);
                      localStorage.setItem("title", productTitle);
                      localStorage.setItem('description', productDescr);
                      localStorage.setItem('price', productPrice);

                      // FUNKAR!!!
                      let getImg = localStorage.getItem('image');
                      let getTitle = localStorage.getItem("title");
                      let getDesc = localStorage.getItem('description');
                      let getPrice = localStorage.getItem("price");
                      
                      console.log(getImg);
                      console.log(getTitle);
                      console.log(getDesc);
                      console.log(getPrice);
                      
                  });

                })
                .catch(error => console.error("Error fetching random product:", error));
    }

    $('#womenCategory').click(function () {
       
        const womensClothing = encodeURIComponent("women's clothing");
        $("#cardsRow").empty(); // Clear existing cards
        addCards(`https://fakestoreapi.com/products/category/${womensClothing}`);
    });

    $('#mensCategory').click(function () {
       
        const mensClothing = encodeURIComponent("men's clothing");
        $("#cardsRow").empty(); // Clear existing cards
        addCards(`https://fakestoreapi.com/products/category/${mensClothing}`);
    });

    $('#jeweleryCategory').click(function () {
    
        $("#cardsRow").empty(); // Clear existing cards
        addCards(`https://fakestoreapi.com/products/category/jewelery`);
    });