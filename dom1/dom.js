document.getElementById("header-title").textContent = 'Hello';
let title = document.getElementById("header-title");
console.log(title)

let header = document.getElementById("main-header");
header.style.borderRadius = "20px"
header.style.borderBottom = "inset 5px black "

let items = document.getElementsByClassName("list-group-item");
items[0].textContent = 'Hello'
items[2].style.backgroundColor = "green";

for(var i = 0 ; i< items.length ; i++){
    items[i].style.fontWeight = "bold";
}
