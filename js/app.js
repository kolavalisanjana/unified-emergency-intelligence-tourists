function analyzeEmergency(){

let type = document.getElementById("emergencyType").value;

document.getElementById("analysisResult").innerText =
"Recommended action: Contact nearest authority for " + type + " emergency.";

}


function saveContact(){

let name = document.getElementById("contactName").value;
let phone = document.getElementById("contactPhone").value;

if(name !== "" && phone !== ""){

document.getElementById("contactSaved").innerText =
"Contact saved successfully.";

}else{

alert("Please enter contact details");

}

}


function findHospitals(){

window.open("https://www.google.com/maps/search/hospital+near+me");

}


function showAlert(){

alert(
"⚠ Safety Alert\n\nPickpocket activity reported near tourist market.\nStay cautious."
);

}
