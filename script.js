document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".section");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    function revealElements() {
        fadeElements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealElements);
    revealElements();

    // Toggle Mobile Menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
