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
