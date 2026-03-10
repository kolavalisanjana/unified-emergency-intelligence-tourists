function analyzeEmergency(){

let type = document.getElementById("emergencyType").value

document.getElementById("analysisResult").innerText =
"Recommended action for " + type + " emergency: Contact nearest authorities."

}



function saveContact(){

let name = document.getElementById("contactName").value
let phone = document.getElementById("contactPhone").value

if(name && phone){

document.getElementById("contactSaved").innerText =
"Contact saved successfully."

}

}



function findHospitals(){

window.open("https://www.google.com/maps/search/hospital+near+me")

}



function showAlert(){

alert(
"⚠ SAFETY ALERT\n\nPickpocket activity reported near tourist market.\nStay cautious and keep belongings secure."
)

}