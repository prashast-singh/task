
let form = document.getElementById('addForm');
let list1 = document.getElementById('table1');
let list2 = document.getElementById('table2');
let list3 = document.getElementById('table3');

let formButton = document.getElementById('SubmitBtn')
form.addEventListener('submit', addItem)
axios.get('http://localhost:4000/order').then(obj =>{displaylist(obj.data)}).catch(err=>console.log(err))
 
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

        let table = document.createElement('div')
            table.style.display = 'none' ; 
            table.appendChild(document.createTextNode(obj[key].table))
            li.appendChild(table)

        li.appendChild(document.createTextNode(obj[key].amount +" - " + obj[key].description));
        li.appendChild(btn);
        li.appendChild(edtbtn)

      // list1.appendChild(li); 
        
         if(obj[key].table === '1'){
            list1.appendChild(li); 
        }
        else
        if(obj[key].table === '2'){
            list2.appendChild(li); 
        }
        else
        if(obj[key].table === '3'){
            list3.appendChild(li); 
        } 

        
        
        

      });
 


};


 function addItem(e){
    e.preventDefault();
 
    if(formButton.classList.contains('SubmitButton')){
        myObj = {
            amount: form.children[1].value,
            description : form.children[3].value,
            table : form.children[5].value
            };
            let str = JSON.stringify();
            axios.post('http://localhost:4000/order',{myObj})
            .then(e=> {
            displaylist({myObj})
            })
            .catch(err => console.log(err))
            
    }

    else{
        myObj = {
            id: form.children[6].value,
            amount: form.children[1].value,
            description : form.children[3].value,
            table : form.children[5].value
            };
        let str = JSON.stringify();

        axios.put('http://localhost:4000/order',myObj).then(e=> location.reload()).catch(err => console.log(err))

    }

    
       
};


list1.addEventListener('click', removeItem)
list2.addEventListener('click', removeItem)
list3.addEventListener('click', removeItem)

 function removeItem(e){
   
    e.preventDefault();

    if(e.target.classList.contains('delete')){
 
        var li = e.target.parentElement;

axios.delete('http://localhost:4000/order',{ data: {  id: li.firstChild.textContent } }  )
  .then(e =>{location.reload();})
  .catch(err=> console.log(err)); 
 //   
}}





list1.addEventListener('click' , edit )
list2.addEventListener('click' , edit )
list3.addEventListener('click' , edit )

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
 