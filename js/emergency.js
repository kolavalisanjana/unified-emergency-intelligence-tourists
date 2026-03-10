document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("emergencyForm");

form.addEventListener("submit", function(e){

e.preventDefault(); // stop normal form submission

// redirect to received page
window.location.href = "received.html";

});

});
