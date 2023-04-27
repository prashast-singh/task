let form = document.getElementById('addForm');
let list = document.getElementById('item');

form.addEventListener('submit', addItem)
list.addEventListener('click', removeItem)


function addItem(e){
    e.preventDefault();

    myObj = {
    name: form.children[1].value,
    Email : form.children[3].value,
    Phone : form.children[5].value
    };
    let str = JSON.stringify(myObj);
    
    localStorage.setItem(form.children[3].value, str);

    let li =  document.createElement('li');

   let  btn = document.createElement('button');
        btn.className = 'btn btn-danger btn-sm float-right delete';
        btn.appendChild(document.createTextNode('Delete'));

    let key = document.createElement('div');
    key.style.display = 'none' ;
    key.appendChild(document.createTextNode(form.children[3].value));
    
    li.appendChild(key);
    li.appendChild(document.createTextNode(form.children[1].value +" - " + form.children[3].value + " - " + form.children[5].value));
    li.appendChild(btn);
    
    list.appendChild(li);    
};

function removeItem(e){
   
    e.preventDefault();

    if(e.target.classList.contains('delete')){
 
        var li = e.target.parentElement;
           
        console.log(li.firstChild.textContent)
         
        localStorage.removeItem(li.firstChild.textContent)
        
        list.removeChild(li);
    }

}