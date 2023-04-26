/*
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
*/
   /*  let tag = document.getElementsByTagName("li");

    for(var i = 0 ; i< tag.length ; i++){
        tag[i].style.fontWeight = "bold";
        tag[i].style.backgroundColor = "grey";


    } */

/* let item = document.querySelectorAll('.list-group-item');

item[1].style.color = "green";

let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i =0; i<odd.length; i++)
odd[i].style.backgroundColor = 'green';

 */

var itemList = document.querySelector('#items');
console.log(itemList);
itemList.parentNode.parentNode.parentNode.style.backgroundColor = 'red';

itemList.parentElement.style.backgroundColor = 'green';

console.log(itemList.childNodes);
console.log(itemList.children);

itemList.children[1].style.backgroundColor = 'yellow';

console.log(itemList.firstChild);

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'First Element Child';

console.log(itemList.lastChild)

itemList.lastElementChild.textContent = 'Last Element Child' ;
itemList.lastElementChild.classList.add("list-group-item");

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

itemList.nextElementSibling.innerHTML = "<h1>next element sibbling</h1>"


var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';

newDiv.setAttribute('type', 'title');
console.log(newDiv);

let newText = document.createTextNode('Hello');

newDiv.appendChild(newText)

itemList.appendChild(newDiv)

var container = document.querySelector('header .container');
var h1 = document.querySelector('.container h1 ')
container.insertBefore(newDiv, h1);

item1 = itemList.children[0];

let newText1 = document.createTextNode('Hello');

let newDiv1 = document.createElement('div')

newDiv1.setAttribute('type', 'title');

newDiv1.appendChild(newText1)


itemList.insertBefore(newDiv1, item1)










