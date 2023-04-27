var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);


// create edit button
  let editBtn = document.createElement('button');

  editBtn.className = 'btn btn-dark btn-sm float-right';

  editBtn.appendChild(document.createTextNode('Edit'));

  li.appendChild(editBtn)


}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');

  // Convert to an array
  Array.from(items).forEach(function(item){
    console.log(item.firstChild)
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
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

/* var itemList = document.querySelector('#items');
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
 */









