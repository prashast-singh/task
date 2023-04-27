let form = document.getElementById('addForm');

form.addEventListener('submit', addItem)

function addItem(e){
    e.preventDefault();

    myObj = {
    name: form.children[1].value,
    Email : form.children[3].value,
    Phone : form.children[5].value
    };
    let str = JSON.stringify(myObj);
    
    localStorage.setItem(form.children[3].value, str);

    let div =  document.createElement('div');
        div.className = 'mt-2'
    div.appendChild(document.createTextNode(form.children[1].value + " - " + form.children[3].value + " - " + form.children[5].value));
     
    console.log(div);

    form.appendChild(div);
}