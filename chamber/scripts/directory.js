const url = "data/members.json";

const cards = document.querySelector("#cards");

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data);
  displayBusinesses(data.businesses);
}

getBusinessData();

const displayBusinesses = (businesses) => {
    businesses.forEach(business => {
        let card = document.createElement("section");
        let companyName = document.createElement("h3");
        let image = document.createElement("img");
        let address = document.createElement("span");
        let phone = document.createElement("span");
        let email = document.createElement("a");

        companyName.textContent = business.companyName;
        address.textContent = business.address;
        phone.textContent = business.phone;
        email.setAttribute("href", "#");
        email.textContent = business.email;
        image.setAttribute("src", business.image);
        image.setAttribute(
          "alt",
          `Logo of ${business.companyName}`,
        );
      image.setAttribute("loading", "lazy");
      image.setAttribute("width", 200)
      image.setAttribute("height", 200);

        card.appendChild(companyName);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(email);

        cards.appendChild(card);
    });
}

// display layout buttons
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", (e) => {
  cards.classList.remove("list");
  gridbutton.classList.add("selected");
  listbutton.classList.remove("selected");
});
listbutton.addEventListener("click", () => {
  cards.classList.add("list");
  listbutton.classList.add("selected");
  gridbutton.classList.remove("selected");
});