let flyMenu = document.getElementById("fly-menu"),
    menuBtn = document.getElementById("menu-btn"),
    menuClsBtn = document.getElementById("menu-cls-btn"),
    cartMenu = document.getElementById("cart-menu"),
    cartBtn = document.getElementById("cart-btn"),
    cartClsBtn = document.getElementById("cart-cls-btn"),
    hider = document.getElementById("hider");

menuBtn.addEventListener("click", () => {
    flyMenu.classList.add("active");
    hider.classList.add("active");
    // document.documentElement.classList.add("stop-scrolling");
});

menuClsBtn.addEventListener("click", () => {
    flyMenu.classList.remove("active");
    hider.classList.remove("active");
    // document.documentElement.classList.remove("stop-scrolling");
});

cartBtn.addEventListener("click", () => {
    cartMenu.classList.add("active");
    hider.classList.add("active");
    // document.documentElement.classList.add("stop-scrolling");
});

cartClsBtn.addEventListener("click", () => {
    cartMenu.classList.remove("active");
    hider.classList.remove("active");
    // document.documentElement.classList.remove("stop-scrolling");
});
