
let form = document.getElementById('addForm');
let list = document.getElementById('item');
let formButton = document.getElementById('SubmitBtn')
form.addEventListener('submit', addItem)
list.addEventListener('click', removeItem)
let token = localStorage.getItem("token")

axios.get('http://localhost:4000/expense', {headers:{"authorization": token}})
.then(obj =>{ displaylist(obj.data)}).catch(err=>console.log(err))
 function displaylist(obj){
    Object.keys(obj).forEach(key => {
    
        let li =  document.createElement('li');
        li.className = 'mb-2'
    
       let  btn = document.createElement('button');
            btn.className = 'btn btn-danger btn-sm float-right delete ml-2';
            btn.appendChild(document.createTextNode('Delete'));
    
    
        let edtbtn = document.createElement('button');
            edtbtn.className = 'btn btn-danger btn-sm float-right Edit ml-2';
            edtbtn.appendChild(document.createTextNode('Edit'));
        
        
        
        let ke = document.createElement('div');
            ke.style.display = 'none' ; 
            ke.appendChild(document.createTextNode(obj[key].id));
            li.appendChild(ke);


        let amount = document.createElement('div');
            amount.style.display = 'none' ; 
            amount.appendChild(document.createTextNode(obj[key].amount))
            li.append(amount)

        let description = document.createElement('div')
            description.style.display = 'none' ; 
            description.appendChild(document.createTextNode(obj[key].description))
            li.appendChild(description)

        let category = document.createElement('div')
            category.style.display = 'none' ; 
            category.appendChild(document.createTextNode(obj[key].category))
            li.appendChild(category)

        li.appendChild(document.createTextNode(obj[key].amount +" - " + obj[key].description + " - " + obj[key].category));
        li.appendChild(btn);
        li.appendChild(edtbtn)
        
        list.appendChild(li); 

      });
 


};


function addItem(e){
    e.preventDefault();
 
    if(formButton.classList.contains('SubmitButton')){
        myObj = {
            amount: form.children[1].value,
            description : form.children[3].value,
            category : form.children[5].value,
            authorization: token
            };
            let str = JSON.stringify();
            axios.post('http://localhost:4000/expense',{myObj})
            .then(e=> {
            //form.appendChild(document.createTextNode({key: e.data}))
            displaylist({key: e.data})
            })
            .catch(err => console.log(err))
            
    }

    else{
        myObj = {
            id: form.children[6].value,
            amount: form.children[1].value,
            description : form.children[3].value,
            category : form.children[5].value
            };
        let str = JSON.stringify();

        axios.put('http://localhost:4000/expense',myObj).then(e=> location.reload()).catch(err => console.log(err))
        .then(e=> location.reload())

    }

    
       
};

function removeItem(e){
   
    e.preventDefault();

    if(e.target.classList.contains('delete')){
 
        var li = e.target.parentElement;

axios.delete('http://localhost:4000/expense',{ data: {  id: li.firstChild.textContent } }  )
  .then(e =>{location.reload()})
  .catch(err=> console.log(err)); 
 //   
}}

//list.removeChild(li)



list.addEventListener('click' , edit )
function edit(e){
e.preventDefault();
if(e.target.classList.contains('Edit')){
        var li = e.target.parentElement;
        let id = li.firstChild.textContent
      
        form.children[1].value = li.children[1].textContent;
        form.children[3].value = li.children[2].textContent;
        form.children[5].value = li.children[3].textContent;
        form.children[6].value = id;
        form.children[7].value = 'Update'
        form.children[7].classList.remove('SubmitButton');

}} 
