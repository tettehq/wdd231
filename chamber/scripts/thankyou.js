const formInfo = document.getElementById("form-info");

const getString = window.location.search;

const myInfo = new URLSearchParams(getString);

formInfo.innerHTML = `
<li><strong>First Name</strong>: ${myInfo.get("first")}</li>
<li><strong>Last Name</strong>: ${myInfo.get("last")}</li>
<li><strong>Email</strong>: ${myInfo.get("email")}</li>
<li><strong>Mobile Number</strong>: ${myInfo.get("phone")}</li>
<li><strong>Business Name</strong>: ${myInfo.get("organization")}</li>
<li><strong>Current Date</strong>: ${myInfo.get("timestamp")}</li>
`;