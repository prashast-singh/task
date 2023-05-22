
 let form = document.getElementById('addForm');
let list = document.getElementById('item');

form.addEventListener('submit', addItem)
list.addEventListener('click', removeItem)
axios.get('http://localhost:4000/appointment').then(obj =>{ displaylist(obj.data)}).catch(err=>console.log(err))
 function displaylist(obj){
    Object.keys(obj).forEach(key => {
    
        let li =  document.createElement('li');
        li.className = 'mb-2'
    
       let  btn = document.createElement('button');
            btn.className = 'btn btn-danger btn-sm float-right delete';
            btn.appendChild(document.createTextNode('Delete'));
    
    
        let edtbtn = document.createElement('button');
            edtbtn.className = 'btn btn-danger btn-sm float-right Edit';
            edtbtn.appendChild(document.createTextNode('Edit'));
    
    
        let ke = document.createElement('div');
         ke.style.display = 'none' ; 
        ke.appendChild(document.createTextNode(obj[key].id));
    
    
        li.appendChild(ke);
        li.appendChild(document.createTextNode(obj[key].name +" - " + obj[key].phone + " - " + obj[key].email));
        li.appendChild(btn);
        li.appendChild(edtbtn)
        
        list.appendChild(li); 

      });
 


};


function addItem(e){
    e.preventDefault();
 
    

     myObj = {
    name: form.children[1].value,
    phone : form.children[3].value,
    email : form.children[5].value
    };
    let str = JSON.stringify(myObj);

    console.log(str)
    axios.post('http://localhost:4000/appointment',{myObj}).then(e=> location.reload()).catch(err => console.log(err))
    
       
};

function removeItem(e){
   
    e.preventDefault();

    if(e.target.classList.contains('delete')){
 
        var li = e.target.parentElement;

      //  let url = "http://localhost:4000/appointment"

      //  let fullurl = url.concat(li.firstChild.textContent)

    //    console.log(fullurl)


axios.delete('http://localhost:4000/appointment',{ data: {  id: li.firstChild.textContent } }  )
  .then(e =>{location.reload()})
  .catch(err=> console.log(err)); 

     
     //   list.removeChild(li);
    }

}





list.addEventListener('click' , edit )





function edit(e){
e.preventDefault();


if(e.target.classList.contains('Edit')){
        var lis = e.target.parentElement;
            console.log(lis.firstChild.textContent)

            console.log(lis)
let url = "https://crudcrud.com/api/0eda8dd85e9f41b48c90fff0c4329cc2/userdata/"
let fullurl = url.concat(lis.firstChild.textContent)

axios.get(fullurl).then(obj =>{ 
       console.log(obj) 
    
     document.getElementById("expense").value = obj.data.myObj.amount;
     document.getElementById("description").value = obj.data.myObj.description;
     document.getElementById("category").value = obj.data.myObj.category; 
    
}).catch(err=>console.log(err))

axios.delete(fullurl)
  .then(res =>{console.log(res)})
  .catch(err=> console.log(err)); 
        
list.removeChild(lis);}


} 


 
 



