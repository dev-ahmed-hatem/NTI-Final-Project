let cartData = cartMenu.querySelectorAll(".cart-data"),
    products = document.querySelectorAll(".proudct"),
    addToCartBtns = document.querySelectorAll(".product .add-to-cart"),
    cartItemTemp = document.getElementById("cart-item-template"),
    cartItemsContainer = document.getElementById("cart-items-container"),
    cartBtnCount = document.querySelector("#cart-btn .count"),
    cartItems = getCartItemsFromLocalStorage();

cartItemTemp.style.display = "none";

addToCartBtns.forEach((element) => {
    element.addEventListener("click", () => {
        let product = document.querySelector(`#${element.dataset.id}`);
        if (cartItems[product.id]) {
            cartItems[product.id]["quantity"]++;
        } else {
            cartItems[product.id] = {
                title: product.querySelector(".title").textContent,
                price: product.querySelector(".price .new").textContent,
                quantity: 1,
                img: product.querySelector("img").getAttribute("src"),
            };
        }

        renderCartItems();
    });
});

function renderCartItems() {
    cartItemsContainer.innerHTML = "";
    if (!Object.keys(cartItems).length == 0) {
        cartMenu.querySelector(".empty").style.display = "none";
        cartData.forEach((element) => {
            element.style.display = null;
        });
    } else {
        cartMenu.querySelector(".empty").style.display = "flex";
        cartData.forEach((element) => {
            element.style.display = "none";
        });
    }
    for (let item in cartItems) {
        let newCartItem = cartItemTemp.cloneNode(true);
        newCartItem
            .querySelector("img")
            .setAttribute("src", cartItems[item]["img"]);
        newCartItem.querySelector(".title").innerHTML =
            cartItems[item]["title"];
        newCartItem.querySelector(".price .text").innerHTML =
            cartItems[item]["price"];
        newCartItem.querySelector(".count").innerHTML =
            cartItems[item]["quantity"];
        newCartItem.querySelector("#increment").dataset.id = item;
        newCartItem.querySelector("#decrement").dataset.id = item;
        newCartItem.querySelector("#delete").dataset.id = item;
        newCartItem.id = "cart-item-" + item;
        cartItems[item]["quantity"];
        newCartItem.style.display = "flex";

        cartItemsContainer.appendChild(newCartItem);
    }
    cartBtnCount.innerHTML = Object.keys(cartItems).length;
    updateLocalStorage();
}

function changeAmount(element) {
    let productId = element.dataset.id,
        cartItem = document.querySelector(`#cart-item-${productId}`);
    element.id == "increment"
        ? cartItems[productId]["quantity"]++
        : cartItems[productId]["quantity"]--;
    if (cartItems[productId]["quantity"] == 0) {
        cartItemsContainer.removeChild(cartItem);
        delete cartItems[productId];
        if (Object.keys(cartItems).length == 0) {
            cartMenu.querySelector(".empty").style.display = "flex";

            cartData.forEach((element) => {
                element.style.display = "none";
            });
        }
    } else {
        cartItem.querySelector("#count").innerHTML =
            cartItems[productId]["quantity"];
    }
    cartBtnCount.innerHTML = Object.keys(cartItems).length;
    updateLocalStorage();
}

function deleteCartItem(element) {
    let productId = element.dataset.id;
    delete cartItems[productId];
    renderCartItems();
}

// Local Storage handling
function updateLocalStorage() {
    if (typeof Storage !== "undefined") {
        const jsonValue = JSON.stringify(cartItems);

        localStorage.setItem("cartItems", jsonValue);
    } else {
        console.error("LocalStorage is not supported by your browser.");
    }
}

function getCartItemsFromLocalStorage() {
    if (typeof Storage !== "undefined") {
        const storedItems = localStorage.getItem("cartItems");

        if (storedItems) {
            const parsedItems = JSON.parse(storedItems);
            return parsedItems;
        } else {
            return {};
        }
    } else {
        console.error("LocalStorage is not supported by your browser.");
        return null;
    }
}

renderCartItems();
