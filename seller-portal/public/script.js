
let form = document.getElementById('addForm');
let list = document.getElementById('table');
let total = document.getElementById('totalValue');
let totalValue = 0;

let formButton = document.getElementById('SubmitBtn')
form.addEventListener('submit', addItem)
axios.get('http://localhost:3000/order').then(obj =>{displaylist(obj.data)}).catch(err=>console.log(err))
 
function displaylist(obj){
    Object.keys(obj).forEach(key => {
        
        let li =  document.createElement('li');
        li.className = 'mb-2'
    
       let  btn = document.createElement('button');
            btn.className = 'btn btn-danger btn-sm float-right delete ml-2';
            btn.appendChild(document.createTextNode('Delete'));
    
    
        let ke = document.createElement('div');
            ke.style.display = 'none' ; 
            ke.appendChild(document.createTextNode(obj[key].id));
            li.appendChild(ke);

        let amount = document.createElement('div');
            amount.style.display = 'none' ; 
            amount.appendChild(document.createTextNode(obj[key].amount));
            li.appendChild(amount);

        
       
        li.appendChild(document.createTextNode(obj[key].amount +" - " + obj[key].description));
        li.appendChild(btn);
        

       list.appendChild(li); 
       totalValue = totalValue + parseInt(obj[key].amount);

      });
 
      let li2 =  document.createElement('p');
      li2.className = 'mb-2'
      li2.appendChild(document.createTextNode("TOTAL VALUE : "+totalValue));
      total.appendChild(li2); 


};


 function addItem(e){
    e.preventDefault();
 
    if(formButton.classList.contains('SubmitButton')){
        myObj = {
            amount: form.children[1].value,
            description : form.children[3].value,
            };
            let str = JSON.stringify();
            axios.post('http://localhost:3000/order',{myObj})
            .then(e=> {
          //  displaylist({myObj})
          location.reload()
            })
            .catch(err => console.log(err))
            
    }

    else{
        myObj = {
            id: form.children[4].value,
            amount: form.children[1].value,
            description : form.children[3].value,
            };
        let str = JSON.stringify();

        axios.put('http://localhost:3000/order',myObj).then(e=> location.reload()).catch(err => console.log(err))

    }

    
       
};


list.addEventListener('click', removeItem)
 function removeItem(e){
   
    e.preventDefault();

    if(e.target.classList.contains('delete')){
 
        var li = e.target.parentElement;

axios.delete('http://localhost:3000/order',{ data: {  id: li.firstChild.textContent } }  )
  .then(e =>{


  //  list.removeChild(li)
  location.reload()


})
  .catch(err=> console.log(err)); 
 //   
}}





/* list.addEventListener('click' , edit )
function edit(e){
e.preventDefault();
if(e.target.classList.contains('Edit')){
        var li = e.target.parentElement;
        let id = li.firstChild.textContent
      
        form.children[1].value = li.children[1].textContent;
        form.children[3].value = li.children[2].textContent;
        form.children[4].value = id;
        form.children[7].value = 'Update'
        form.children[7].classList.remove('SubmitButton');

}} 
  */