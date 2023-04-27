let form = document.getElementById('addForm');
let list = document.getElementById('item');

let li = document.querySelectorAll('li')

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


    let edtbtn = document.createElement('button');
        edtbtn.className = 'btn btn-danger btn-sm float-right Edit';
        edtbtn.appendChild(document.createTextNode('Edit'));


    let key = document.createElement('div');
    key.style.display = 'none' ;
    key.appendChild(document.createTextNode(form.children[3].value));


    li.appendChild(key);
    li.appendChild(document.createTextNode(form.children[1].value +" - " + form.children[3].value + " - " + form.children[5].value));
    li.appendChild(btn);
    li.appendChild(edtbtn)
    
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

list.addEventListener('click' , edit )

function edit(e){
e.preventDefault();



        var li = e.target.parentElement;

        myobjj = JSON.parse(localStorage.getItem(li.firstChild.textContent))

        console.log(myobjj.name)

        document.getElementById("name").value = myobjj.name;
        document.getElementById("email").value = myobjj.Email;
        document.getElementById("phone").value = myobjj.Phone;


         
        localStorage.removeItem(li.firstChild.textContent)
        
        list.removeChild(li);


}