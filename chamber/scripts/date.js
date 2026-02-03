document.getElementById("lastModified").innerHTML = document.lastModified;

const d = new Date();

document.getElementById("copyYear").innerHTML = d.getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const now = d.toLocaleString();
  document.getElementById("timestamp").value = now;
});