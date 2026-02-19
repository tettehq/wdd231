// scripts/form-response.js

export function handleFormResponse() {
  const resultsBox = document.querySelector("#results");

  // Safety check to ensure we are on the correct page
  if (!resultsBox) return;

  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has("fname")) {
    // Requirement: Use Template Literals for dynamic content
    resultsBox.innerHTML = `
            <article class="confirmation-card">
                <h2>Submission Details</h2>
                <p><strong>Name:</strong> ${urlParams.get("fname")} ${urlParams.get("lname")}</p>
                <p><strong>Email:</strong> ${urlParams.get("email")}</p>
                <p><strong>Experience Level:</strong> ${urlParams.get("level")}</p>
                <p><strong>Membership Type:</strong> ${urlParams.get("membership")}</p>
                <p><strong>Favorite Plant Type:</strong> ${urlParams.get("fav-type") || "Not specified"}</p>
                <hr>
                <p><small>Reference ID: ${urlParams.get("timestamp")}</small></p>
                <p><small>Submitted on: ${new Date(parseInt(urlParams.get("timestamp"))).toLocaleString()}</small></p>
            </article>
        `;
  } else {
    resultsBox.innerHTML = `<p>No submission data found. Please return to the <a href="join.html">Join Us</a> page.</p>`;
  }
}
