let form = document.getElementById('addForm');

form.addEventListener('submit', addItem)

function addItem(e){
    e.preventDefault();

    myObj = {
    name: form.children[1].value,
    Email : form.children[3].value
    };
    let str = JSON.stringify(myObj);
    
    localStorage.setItem(form.children[3].value, str);

}