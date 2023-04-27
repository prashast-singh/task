let form = document.getElementById('addForm');

form.addEventListener('submit', addItem)

function addItem(e){
    e.preventDefault();

    localStorage.setItem(form.children[3].value, form.children[1].value)

}