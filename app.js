// let images = document.querySelectorAll(".galeria__photos img");
// let nav = document.querySelector(".nav");
// let logo = document.querySelector(".nav img")
// let logoLink = document.querySelectorAll(".item")

// window.addEventListener("scroll", () => {
//     nav.classList.toggle("scroll", window.scrollY > 80);
//     logo.classList.toggle("scroll--logo", window.scrollY > 80);
//     for (let i = 0; i < logoLink.length; i++) {
//         logoLink[i].classList.toggle("scroll--link", window.scrollY > 80);
//     }
// });

// images[3].addEventListener("click", () => {
//     images[3].style.zIndex = -1;
//     images[2].style.zIndex = 500;
// });
// images[2].addEventListener("click", () => {
//     images[2].style.zIndex = -1;
//     images[1].style.zIndex = 500;
// });

// images[1].addEventListener("click", () => {
//     images[1].style.zIndex = -1;
//     images[0].style.zIndex = 500;
// });

// images[0].addEventListener("click", () => {
//     images[0].style.zIndex = -1;
//     images[3].style.zIndex = 500;
// });

const navButton = document.querySelector(".nav__button");
const navIcon = document.querySelector(".nav__icon");
const navBox = document.querySelector(".nav__box");
const navLinks = document.querySelectorAll("nav__box__link");

navButton.addEventListener("click", () => {
  navBox.classList.toggle("hidden");
});

navBox.addEventListener("click", (e) => {
  navBox.classList.add("hidden");
});
