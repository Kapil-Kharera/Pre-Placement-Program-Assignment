// https://fakestoreapi.com/products
const containerElement = document.getElementById("shopping-page");
const cartContainerElement = document.querySelector(".cart-page");

const modalElement = document.getElementById("modalContainer");
const modalTitleElement = document.getElementById("modal-title");
// const modalDescriptionElement = document.getElementById("modal-description");
const modalPriceElement = document.getElementById("modal-price");
const modalImgElement = document.getElementById("modal-img");

const cart = [];

const fetchData = async () =>  {
    const url = "https://fakestoreapi.com/products?limit=8";
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        return data;
   
    } catch (error) {
        console.log(error);
    }
}

function createCard(product) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add('card-container');

    const imgContainer = document.createElement("img");
    imgContainer.classList.add("product-img");
    imgContainer.setAttribute("src", product.image);
    imgContainer.setAttribute("alt", product.description);
    cardContainer.appendChild(imgContainer);

    const titleContainer = document.createElement("h4");
    titleContainer.classList.add("product-title");
    titleContainer.textContent = `${product.title}`;
    cardContainer.appendChild(titleContainer);

    const priceContainer = document.createElement("p");
    priceContainer.classList.add("product-price");
    priceContainer.textContent = `Price: $${product.price}`;
    cardContainer.appendChild(priceContainer);

    const cartButtonContainer = document.createElement("button");
    cartButtonContainer.id = "cartBtn";
    cartButtonContainer.textContent = 'Add To Cart';
    cardContainer.appendChild(cartButtonContainer);

    cardContainer.addEventListener("click", () => openModal(product));

    return cardContainer;
}

const openModal = (product) => {
    console.log(product);

    const closeModal = () => {
        modalContainer.style.display = "none";
    };

    // Attach click event listener to the close icon
    const closeIcon = modalElement.querySelector(".close");
    closeIcon.addEventListener("click", closeModal);

    modalImgElement.setAttribute("src", product.image);
    modalTitleElement.innerHTML = product.title;
    modalPriceElement.textContent = `Price: $${product.price}`;

    modalElement.style.display = "block";
};

function handleAddToCart(event) {
    const cardContainer = event.target.closest(".card-container");

    const products = {
        image: cardContainer.querySelector("img").src,
        title: cardContainer.querySelector("h4").textContent,
        price: cardContainer.querySelector("p").textContent,
    }

    cart.push(products);

    console.log("Products are: ", cart);

    updateCart();
}


function updateCart() {

    cartContainerElement.innerHTML = "";

    cart.forEach((product) => {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");
    
        const imgContainer = document.createElement("img");
        imgContainer.setAttribute("src", product.image);
        imgContainer.classList.add("product-img");
        cardContainer.appendChild(imgContainer);
    
        const titleContainer = document.createElement("h4");
        titleContainer.textContent = product.title;
        titleContainer.classList.add("product-title");
        cardContainer.appendChild(titleContainer);

        const priceContainer = document.createElement("p");
        priceContainer.textContent = "Price - $" + product.price;
        priceContainer.classList.add("product-price");
        cardContainer.appendChild(priceContainer);

        const buyBtncontainer = document.createElement("button");
        buyBtncontainer.textContent ="Buy";
        buyBtncontainer.id="buyBtn";
        cardContainer.appendChild(buyBtncontainer);

        cartContainerElement.appendChild(cardContainer);
    });

}


document.addEventListener("DOMContentLoaded", () => {
    fetchData()
    .then((data) => {
        if(data) {
            data.forEach((item) => {
                const productCard = createCard(item);
                // console.log(productCard);
                containerElement.appendChild(productCard);


                const addToCartButton = productCard.querySelector("#cartBtn");
                addToCartButton.addEventListener("click", handleAddToCart);

                // handleCardClick(item);
            });
        }
    })
    .catch((e) => console.log("Error is : ", e));
})

modalElement.addEventListener("click", (event) => {
    if (event.target === modalElement) {
        modalElement.style.display = "none";
    }
});

