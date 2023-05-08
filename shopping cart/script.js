let form = document.getElementById('addForm');
let elist = document.getElementById('electronicitem');
let flist = document.getElementById('fooditem');
let slist = document.getElementById('skinitem');



console.log("iteml")


 axios.get('https://crudcrud.com/api/c5a0229084cc47f6bed937bfbacbd140/electronics').then(obj =>{ displayelist(obj.data)}).catch(err=>console.log(err))
axios.get('https://crudcrud.com/api/c5a0229084cc47f6bed937bfbacbd140/food').then(obj =>{ displayflist(obj.data)}).catch(err=>console.log(err))  
 axios.get('https://crudcrud.com/api/c6916d756e54467395aab524bd9a8d7e/skin').then(obj =>{ displayslist(obj.data)}).catch(err=>console.log(err))
   

form.addEventListener('submit', addItem)



function addItem(e){
    e.preventDefault();
 
    

     myObj = {
    amount: form.children[1].value,
    description : form.children[3].value,
    category : form.children[5].value
    };
    let str = JSON.stringify(myObj);
    console.log(str)
    
    if(form.children[5].value === 'Electronic'){
        console.log("added")
        axios.post('https://crudcrud.com/api/c5a0229084cc47f6bed937bfbacbd140/electronics',{myObj}).then(location.reload()).catch(err => console.log(err))
  }

   if(form.children[5].value === 'Food'){
    console.log("added")
    axios.post('https://crudcrud.com/api/c5a0229084cc47f6bed937bfbacbd140/food',{myObj}).then(location.reload()).catch(err => console.log(err))
} 

 if(form.children[5].value === 'Skincare'){
    console.log("added")
    axios.post('https://crudcrud.com/api/c6916d756e54467395aab524bd9a8d7e/skin',{myObj}).then(location.reload()).catch(err => console.log(err))
}  

    
       
};

 function displayelist(obj){
    Object.keys(obj).forEach(key => {
    
        let li =  document.createElement('li');
        li.className = 'mb-2'
    
       let  btn = document.createElement('button');
            btn.className = 'btn btn-danger btn-sm float-right delete';
            btn.appendChild(document.createTextNode('Delete'));
    
    
        let ke = document.createElement('div');
         ke.style.display = 'none' ; 
        ke.appendChild(document.createTextNode('https://crudcrud.com/api/c5a0229084cc47f6bed937bfbacbd140/electronics/' + obj[key]._id));
    
    
        li.appendChild(ke);
        li.appendChild(document.createTextNode(obj[key].myObj.amount +" - " + obj[key].myObj.description + " - " + obj[key].myObj.category));
        li.appendChild(btn);
        
        elist.appendChild(li); 

      });
 


}; 





 function displayflist(obj){
    Object.keys(obj).forEach(key => {
    
        let li =  document.createElement('li');
        li.className = 'mb-2'
    
       let  btn = document.createElement('button');
            btn.className = 'btn btn-danger btn-sm float-right delete';
            btn.appendChild(document.createTextNode('Delete'));
    
    
        let ke = document.createElement('div');
         ke.style.display = 'none' ; 
        ke.appendChild(document.createTextNode('https://crudcrud.com/api/c5a0229084cc47f6bed937bfbacbd140/food/' + obj[key]._id));
    
    
        li.appendChild(ke);
        li.appendChild(document.createTextNode(obj[key].myObj.amount +" - " + obj[key].myObj.description + " - " + obj[key].myObj.category));
        li.appendChild(btn);
        
        flist.appendChild(li); 

      });
 


};

  function displayslist(obj){
    
    Object.keys(obj).forEach(key => {
    
        let li =  document.createElement('li');
        li.className = 'mb-2'
    
       let  btn = document.createElement('button');
            btn.className = 'btn btn-danger btn-sm float-right delete';
            btn.appendChild(document.createTextNode('Delete'));
    
    
        let ke = document.createElement('div');
         ke.style.display = 'none' ;
        ke.appendChild(document.createTextNode('https://crudcrud.com/api/c6916d756e54467395aab524bd9a8d7e/skin/' + obj[key]._id));
    
    
        li.appendChild(ke);
        li.appendChild(document.createTextNode(obj[key].myObj.amount +" - " + obj[key].myObj.description + " - " + obj[key].myObj.category));
        li.appendChild(btn);
        
        slist.appendChild(li); 

      });
 


}; 



slist.addEventListener('click', removeItem)
elist.addEventListener('click', removeItem)
flist.addEventListener('click', removeItem)

function removeItem(e){
   
    e.preventDefault();

    if(e.target.classList.contains('delete')){

        console.log('delete')
 
     var li = e.target.parentElement;
           
       
        console.log(li.firstChild.textContent) 
 


     axios.delete(li.firstChild.textContent)
  .then(res =>{console.log(res); location.reload();})
  .catch(err=> console.log(err)); 

        
         
    }

}
  

