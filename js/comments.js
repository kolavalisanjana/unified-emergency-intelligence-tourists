function addComment(){

let input=document.getElementById("commentInput")
let list=document.getElementById("comments")

let li=document.createElement("li")
li.innerText=input.value

list.appendChild(li)

input.value=""

}
