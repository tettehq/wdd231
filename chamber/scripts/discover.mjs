import { kponeInterests } from "../data/itemsOfInterest.mjs";

const displayArea = document.getElementById("displayArea");

function renderCards(items) {
  displayArea.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("section");
    card.className = "interest-card";

    const title = document.createElement("h2");
    title.textContent = item.name;

    const img = document.createElement("img");
    img.src = item.image.url;
    img.alt = item.name;
    img.width = item.image.width;
    img.height = item.image.height;

    const address = document.createElement("address");
    address.textContent = item.address;

    const description = document.createElement("p");
    description.textContent = item.description;

    const button = document.createElement("button");
    button.textContent = "Learn More";
    button.type = "button";

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);

    displayArea.appendChild(card);
  });
}

renderCards(kponeInterests);

// last visit logic
function displayVisitorMessage() {
  const messageArea = document.getElementById("messageArea");
  const lastVisit = localStorage.getItem("lastVisitDate");
  const now = Date.now();

  const container = document.createElement("section");
  container.className = "marquee-container";

  const scrollingText = document.createElement("span");
  scrollingText.className = "marquee-text";

  let message = "";

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const previousVisit = parseInt(lastVisit);
    const msBetween = now - previousVisit;
    const daysBetween = Math.floor(msBetween / (1000 * 60 * 60 * 24));

    if (msBetween < 86400000) {
      message = "Back so soon! Awesome!";
    } else {
      const dayText = daysBetween === 1 ? "day" : "days";
      message = `You last visited ${daysBetween} ${dayText} ago.`;
    }
  }

  scrollingText.textContent = message;
  container.appendChild(scrollingText);

  messageArea.append(container);

  localStorage.setItem("lastVisitDate", now.toString());
}

displayVisitorMessage();