let getImg = localStorage.getItem('image');
            let getTitle = localStorage.getItem("title");
            let getDesc = localStorage.getItem('description');
            let getPrice = localStorage.getItem('price');

            console.log('Src for picture:', getImg)
            console.log('Titeltexten är: ', getTitle);
            console.log(getDesc)
            console.log(getPrice)
            
            console.log(localStorage)
            
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
                <a class="btn btn-outline-dark my-2 order-btn" href="../orderpage/order.html?id=${id}" role="button">Beställ</a>
                
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

                })
                .catch(error => console.error("Error fetching random product:", error));
    }

    $('#womensCategory').click(function () {
       
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

    $('#allCategories').click(function () {
    
        $("#cardsRow").empty(); // Clear existing cards
        addCards(`https://fakestoreapi.com/products`);
    });

    // js för formuläret!

    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");
    
        form.addEventListener("submit", function (event) {
            event.preventDefault();
    
            // Validera epost
            const emailInput = document.querySelector("input[name='email']");
            const emailValue = emailInput.value.trim();
            if (!emailValue.includes("@") || emailValue.length > 50) {
                alert("Vänligen ange en giltig e-postadress (max 50 tecken).");
                return;
            }
    
            //Validera förnamn
            const firstNameInput = document.querySelector("input[name='fname']");
            const firstNameValue = firstNameInput.value.trim();
            if (firstNameValue.length < 2 || firstNameValue.length > 50) {
                alert("Förnamn måste vara mellan 2 och 50 tecken långt.");
                return;
            }
    
            //Validera efternamn
            const lastNameInput = document.querySelector("input[name='lname']");
            const lastNameValue = lastNameInput.value.trim();
            if (lastNameValue.length < 2 || lastNameValue.length > 50) {
                alert("Efternamn måste vara mellan 2 och 50 tecken långt.");
                return;
            }
    
            // Validera address
            const addressInput = document.querySelector("input[name='address']");
            const addressValue = addressInput.value.trim();
            if (addressValue.length < 2 || addressValue.length > 50) {
                alert("Adress måste vara mellan 2 och 50 tecken långt.");
                return;
            }
    
            // Validera postnr
            const postalCodeInput = document.querySelector("input[name='postnummer']");
            const postalCodeValue = postalCodeInput.value.trim();
            if (postalCodeValue.length !== 5 || !/^\d{5}$/.test(postalCodeValue)) {
                alert("Postnummer måste vara 5 siffror.");
                return;
            }
    
            // Validera stad
            const cityInput = document.querySelector("input[name='stad']");
            const cityValue = cityInput.value.trim();
            if (cityValue.length < 2 || cityValue.length > 50) {
                alert("Stad måste vara mellan 2 och 50 tecken långt.");
                return;
            }
    
            // Validera land
            const countryInput = document.querySelector("input[name='land']");
            const countryValue = countryInput.value.trim();
            if (countryValue.length < 2 || countryValue.length > 50) {
                alert("Land måste vara mellan 2 och 50 tecken långt.");
                return;
            }
    
            // Validera telenr
            const phoneInput = document.querySelector("input[name='telenr']");
            const phoneValue = phoneInput.value.trim();
            if (!/^[0-9 -]{0,50}$/.test(phoneValue)) {
                alert("Vänligen ange ett giltigt telefonnummer (max 50 tecken).");
                return;
            }
    
            // Om allt stämmer!
            form.submit();
        });
    
    });