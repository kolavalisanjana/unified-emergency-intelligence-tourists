const stars=document.getElementById("stars")

for(let i=1;i<=5;i++){

let star=document.createElement("span")
star.innerHTML="⭐"

star.onclick=()=>alert("Rating: "+i)

stars.appendChild(star)

}