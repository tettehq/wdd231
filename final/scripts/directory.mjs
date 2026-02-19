import { updateGardenCount } from "./main.mjs";

const display = document.querySelector("#plant-display");
let allPlants = []; // Store full list for filtering

export async function fetchPlants() {
  try {
    const response = await fetch("data/plants.json");
    if (!response.ok) throw new Error("Failed to load JSON");

    const data = await response.json();
    allPlants = data.plants; // Save the array to our variable
    renderPlants(allPlants);
  } catch (error) {
    console.error("Fetch error:", error);
    display.innerHTML = `<p>Error loading plants. Please try again later.</p>`;
  }
}

// Logic to filter the array based on Local Storage IDs
export function filterFavorites(showOnlyFavs) {
  if (showOnlyFavs) {
    const favorites = getFavorites();
    // Requirement: Array Method (.filter)
    const filteredList = allPlants.filter((plant) =>
      favorites.includes(plant.id),
    );

    if (filteredList.length === 0) {
      display.innerHTML = `<p class="no-favs">Your garden is empty! Save some plants first.</p>`;
    } else {
      renderPlants(filteredList);
    }
  } else {
    renderPlants(allPlants);
  }
}

function getFavorites() {
  return JSON.parse(localStorage.getItem("myGarden")) || [];
}

function toggleFavorite(plantId, button) {
  let favorites = getFavorites();

  if (favorites.includes(plantId)) {
    favorites = favorites.filter((id) => id !== plantId);
    button.innerHTML = '<i class="fa fa-heart-o"></i> Save';
    button.classList.remove("active");
  } else {
    favorites.push(plantId);
    button.innerHTML = '<i class="fa fa-heart"></i> Saved';
    button.classList.add("active");
  }

  localStorage.setItem("myGarden", JSON.stringify(favorites));
  updateGardenCount();

  // Re-run filter logic if user is currently in "Garden Only" mode
  const filterBtn = document.querySelector("#filter-favs");
  if (filterBtn && filterBtn.classList.contains("selected")) {
    filterFavorites(true);
  }
}

function renderPlants(plants) {
  display.innerHTML = "";
  const favorites = getFavorites();

  plants.forEach((plant) => {
    const isFav = favorites.includes(plant.id);
    const card = document.createElement("article");
    card.className = "plant-card";

    card.innerHTML = `
            <figure>
                <img src="${plant.image_url}" alt="${plant.common_name}" loading="lazy" width="300" height="300">
            </figure>
            <h3>${plant.common_name}</h3>
            <p class="scientific"><em>${plant.scientific_name}</em></p>
            <p><strong>Light:</strong> ${plant.light_level}</p>
            <p><strong>Difficulty:</strong> ${plant.difficulty}</p>
            <div class="card-actions">
              <button class="view-btn">Care Tips</button>
              <button class="fav-btn ${isFav ? "active" : ""}" data-id="${plant.id}">
                ${isFav ? '<i class="fa fa-heart"></i> Saved' : '<i class="fa fa-heart-o"></i> Save'}
              </button>
            </div>
        `;

    card
      .querySelector(".view-btn")
      .addEventListener("click", () => showDetails(plant));

    card.querySelector(".fav-btn").addEventListener("click", (e) => {
      toggleFavorite(plant.id, e.currentTarget);
    });

    display.appendChild(card);
  });
}

function showDetails(plant) {
  const modal = document.querySelector("#plant-details");
  const content = document.querySelector("#modal-content");

  content.innerHTML = `
        <h2>${plant.common_name}</h2>
        <p><strong>Watering:</strong> ${plant.water_needs}</p>
        <p><strong>Scientific Name:</strong> ${plant.scientific_name}</p>
        <p><strong>Pet Safe:</strong> ${plant.pet_safe ? "Yes ✅" : "No ❌"}</p>
        <p>${plant.description}</p>
    `;
  modal.showModal();
}
