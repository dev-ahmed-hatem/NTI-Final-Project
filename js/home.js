let imagesContainer = document.getElementById("images"),
    trails = document.getElementById("trails"),
    leftArrow = document.getElementById("left-arrow"),
    rightArrow = document.getElementById("right-arrow"),
    activeTrail = trails.querySelector(".active");

document.body.onresize = function () {
    activateTrail(activeTrail);
};

trails.querySelectorAll("span.trail").forEach(function (el) {
    el.addEventListener("click", () => {
        activeTrail = el;
        activateTrail(el);
    });
});

rightArrow.addEventListener("click", () => {
    if (activeTrail.nextElementSibling == null) {
        activeTrail = trails.querySelector("span:first-child");
    } else {
        activeTrail = activeTrail.nextElementSibling;
    }
    activateTrail(activeTrail);
});

leftArrow.addEventListener("click", () => {
    if (activeTrail.previousElementSibling == null) {
        activeTrail = trails.querySelector("span:last-child");
    } else {
        activeTrail = activeTrail.previousElementSibling;
    }
    activateTrail(activeTrail);
});

function activateTrail(trail) {
    trails.querySelectorAll("span.trail").forEach(function (el) {
        el.classList.remove("active");
    });
    trail.classList.add("active");
    imagesContainer.style.transform = `translateX(${
        -(activeTrail.dataset.order - 1) * 100
    }%)`;
}

// setInterval(() => {
//     rightArrow.click();
// }, 5000);

// fly menu

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
