const spotlight = document.querySelector("#spotlight");

function displaySpotlight(businesses) {
  for (let i = 0; i < 3; i++) {
    const business = businesses[i];
    const businessCard = document.createElement("article");
    const businessName = document.createElement("h2");
    const image = document.createElement("img");
    const email = document.createElement("span");
    const phone = document.createElement("span");
    const site = document.createElement("a");

    businessName.textContent = `${business.companyName}`;
    image.setAttribute("src", business.image);
    image.setAttribute("alt", `${business.companyName} image`);
    email.textContent = business.email;
    phone.textContent = business.phone;
    site.setAttribute("href", "#");
    site.textContent = "visit site";

    businessCard.appendChild(businessName);
    businessCard.appendChild(image);
    businessCard.appendChild(email);
    businessCard.appendChild(phone);
    businessCard.appendChild(site);

    spotlight.appendChild(businessCard);
  }
}

export async function getBusinessData(dataUrl) {
  const response = await fetch(dataUrl);
  const data = await response.json();
  const businesses = getSpotlightBusinesses(data.businesses);
  displaySpotlight(businesses);
}

function getSpotlightBusinesses(businesses) {
  let spotlight = [];
  while (spotlight.length < 3) {
    let business = getRandomItem(businesses);
    if (business.membershipLevel > 1) {
      spotlight.push(business);
    }
  }
  return spotlight;
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
