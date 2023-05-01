
 let form = document.getElementById('addForm');
let list = document.getElementById('item');



form.addEventListener('submit', addItem)
list.addEventListener('click', removeItem)

let count = 0;
function addItem(e){
    e.preventDefault();

    myObj = {
    Expense: form.children[1].value,
    Description : form.children[3].value,
    Category : form.children[5].value
    };
    let str = JSON.stringify(myObj);
    
    localStorage.setItem(++count, str);

    let li =  document.createElement('li');
    li.className = 'mb-2'

   let  btn = document.createElement('button');
        btn.className = 'btn btn-danger btn-sm float-right delete';
        btn.appendChild(document.createTextNode('Delete'));


    let edtbtn = document.createElement('button');
        edtbtn.className = 'btn btn-danger btn-sm float-right Edit';
        edtbtn.appendChild(document.createTextNode('Edit'));


    let key = document.createElement('div');
    key.style.display = 'none' ;
    key.appendChild(document.createTextNode(count));


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


if(e.target.classList.contains('Edit')){
        var lis = e.target.parentElement;
            console.log(lis.firstChild.textContent)
        
        myobjj = JSON.parse(localStorage.getItem(lis.firstChild.textContent))

        

        document.getElementById("expense").value = myobjj.Expense;
        document.getElementById("description").value = myobjj.Description;
        document.getElementById("category").value = myobjj.Category; 
        localStorage.removeItem(lis.firstChild.textContent)
        
        list.removeChild(lis);}


} 


 
