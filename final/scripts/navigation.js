// scripts/navigation.js
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#primary-nav ul");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuButton.classList.toggle("open");
});
