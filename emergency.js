const form = document.getElementById("emergencyForm");

form.addEventListener("submit", function(e){

e.preventDefault(); // stops page reload

// redirect to received page
window.location.href = "received.html";

});