function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

window.onscroll = function() {
    toggleScrollToTopButton();
};

function toggleScrollToTopButton() {
    const scrollToTopBtn = document.getElementById("scroll-to-top");

    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}
