import { fetchPlants, filterFavorites } from "./directory.mjs";
import { handleFormResponse } from "./form-response.mjs";

if (document.querySelector("#plant-display")) {
  fetchPlants();
}

const gridBtn = document.querySelector("#grid-view");
const listBtn = document.querySelector("#list-view");
const container = document.querySelector("#plant-display");
const modal = document.querySelector("#plant-details");
const closeBtn = document.querySelector("#close-modal");

if (gridBtn && listBtn) {
  gridBtn.addEventListener("click", () => {
    container.className = "grid-layout";
    gridBtn.classList.add("selected");
    listBtn.classList.remove("selected");
  });
  listBtn.addEventListener("click", () => {
    container.className = "list-layout";
    gridBtn.classList.remove("selected");
    listBtn.classList.add("selected");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => modal.close());
}

if (document.querySelector("#results")) {
  handleFormResponse();
}

const timestamp = document.getElementById("form-time");
if (timestamp) {
  timestamp.value = Date.now();
}

const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#primary-nav ul");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    const expanded =
      menuButton.getAttribute("aria-expanded") === "true" || false;
    menuButton.setAttribute("aria-expanded", !expanded);
    nav.classList.toggle("show");
    menuButton.classList.toggle("open");
  });
}

export function updateGardenCount() {
  const countDisplay = document.querySelector("#garden-count");
  if (countDisplay) {
    const favorites = JSON.parse(localStorage.getItem("myGarden")) || [];
    // Updated to just the number since your HTML has the parentheses
    countDisplay.textContent = favorites.length;
  }
}

const filterBtn = document.querySelector("#filter-favs");
let favsOnly = false;

if (filterBtn) {
  filterBtn.addEventListener("click", () => {
    favsOnly = !favsOnly;
    filterBtn.classList.toggle("selected");
    filterFavorites(favsOnly);
  });
}

updateGardenCount();
