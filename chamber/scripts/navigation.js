// hamburger button and navigation logic
const navbutton = document.getElementById("nav-button");
const navBar = document.getElementById("nav-bar");

navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("show");

    navBar.classList.toggle("show");
});