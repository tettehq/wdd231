const dialog = document.querySelector("#membershipDialog");
const content = document.querySelector("#dialogContent");
const closeBtn = document.querySelector("#closeModal");

const nonProfitButton = document.getElementById("np");
const bronzeButton = document.getElementById("bronze");
const silverButton = document.getElementById("silver");
const goldButton = document.getElementById("gold");

document.addEventListener("DOMContentLoaded", () => {
  const now = d.toLocaleString();
  document.getElementById("timestamp").value = now;
});

function openDialog(html) {
  content.innerHTML = html;
  dialog.showModal();
}

closeBtn.addEventListener("click", () => {
  dialog.close();
});

nonProfitButton.addEventListener("click", () => {
  openDialog(`
    <h2>Non-Profit Membership</h2>
    <p>For charitable and community organizations.</p>
    <ul>
      <li>No membership fee</li>
      <li>Networking opportunities</li>
      <li>Community visibility</li>
    </ul>
  `);
});

bronzeButton.addEventListener("click", () => {
  openDialog(`
    <h2>Bronze Membership</h2>
    <p>Ideal for small businesses.</p>
    <ul>
      <li>Directory listing</li>
      <li>Event discounts</li>
      <li>Basic promotion</li>
    </ul>
  `);
});

silverButton.addEventListener("click", () => {
  openDialog(`
    <h2>Silver Membership</h2>
    <p>For growing businesses.</p>
    <ul>
      <li>Homepage spotlight</li>
      <li>Training programs</li>
      <li>Priority support</li>
    </ul>
  `);
});

goldButton.addEventListener("click", () => {
  openDialog(`
    <h2>Gold Membership</h2>
    <p>Premium benefits and visibility.</p>
    <ul>
      <li>Featured advertising</li>
      <li>VIP event access</li>
      <li>Leadership opportunities</li>
    </ul>
  `);
});