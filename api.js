async function loadTips(){

let tips=[
"Avoid isolated areas",
"Keep copies of documents",
"Use official taxis",
"Beware of pickpockets"
]

let list=document.getElementById("tips")

tips.forEach(t=>{
let li=document.createElement("li")
li.innerText=t
list.appendChild(li)
})

}

loadTips()