const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line":"ri-menu-line")
});

navLinks.addEventListener("click" , (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});




//  ScrollReveal configuration
const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Initializing ScrollReveal and reveal elements
ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOptions,
    origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOptions,
    delay: 300,
});

ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOptions,
    delay: 500,
});

ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOptions,
    delay: 800,
});



/*---------scroll reveal for section 3-------------*/




ScrollReveal().reveal(".commitment__image img", {
    ...scrollRevealOptions,
    origin: "left",
});

ScrollReveal().reveal(".commitment__content .section__header", {
    ...scrollRevealOptions,
    delay: 200,
});

ScrollReveal().reveal(".commitment__content .section__description", {
    ...scrollRevealOptions,
    delay: 400,
});

ScrollReveal().reveal(".commitment__list li", {
    ...scrollRevealOptions,
    delay: 700,
    interval: 450,
});

/*---------scroll reveal for section 3-------------*/

ScrollReveal().reveal(".build__image img", {
    ...scrollRevealOptions,
    origin: "right",
});

ScrollReveal().reveal(".build__content .section__header", {
    ...scrollRevealOptions,
    delay: 200,
});

ScrollReveal().reveal(".build__content .section__description", {
    ...scrollRevealOptions,
    delay: 400,
});

ScrollReveal().reveal(".build__grid li", {
    ...scrollRevealOptions,
    delay: 700,
    interval: 450,
});

/*---------Swiper animation-------------*/

const swiper = new Swiper(".swiper", {
    loop:true,
    pagination: {
        el:".swiper-pagination",
    },
});