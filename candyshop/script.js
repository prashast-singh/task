
let form = document.getElementById('addForm');
let list = document.getElementById('item');

form.addEventListener('submit', addItem)
axios.get('https://crudcrud.com/api/317f6a6b813448d090d9cf5612799aa6/userdata').then(obj =>{ displaylist(obj.data)}).catch(err=>console.log(err));
function displaylist(obj){
    console.log
    Object.keys(obj).forEach(key => {
    
        let li =  document.createElement('li');
        li.className = 'mb-2'
    
       let  btn = document.createElement('button');
            btn.className = 'btn btn-danger btn-sm float-right buyone';
            btn.appendChild(document.createTextNode('Buy One'));
    
    
        let btn2 = document.createElement('button');
            btn2.className = 'btn btn-danger btn-sm float-right buytwo ml-2';
            btn2.appendChild(document.createTextNode('Buy Two'));
    
    
        let ke = document.createElement('div');
         ke.style.display = 'none' ; 
        ke.appendChild(document.createTextNode(obj[key]._id));
    
    
        li.appendChild(ke);
        li.appendChild(document.createTextNode(obj[key].myObj.name +"-" + obj[key].myObj.description + " Rs-" + obj[key].myObj.price + " " + obj[key].myObj.quantity+" Nos"));
        li.appendChild(btn2);
        li.appendChild(btn)
        
        list.appendChild(li); 

      });
 


};


function addItem(e){
    
 
    

     myObj = {
    name: form.children[1].value,
    description : form.children[3].value,
    price : form.children[5].value,
    quantity : form.children[7].value,
    };
    let str = JSON.stringify(myObj);

    console.log(str)
    axios.post('https://crudcrud.com/api/317f6a6b813448d090d9cf5612799aa6/userdata',{myObj}).then(e =>displaylist(e)).catch(err => console.log(err))
    
       
};

list.addEventListener('click' , buyone )
function buyone(e){
   
    

    if(e.target.classList.contains('buyone')){
 
        var li = e.target.parentElement;
        console.log(li.firstChild.textContent) 
        let url = "https://crudcrud.com/api/317f6a6b813448d090d9cf5612799aa6/userdata/"
        let fullurl = url.concat(li.firstChild.textContent)
        console.log(fullurl)

         this.q = 0
         that = this;
        axios.get(fullurl).then(obj =>{console.log(obj.data.myObj.quantity-1);
            
            
        
            axios.put(fullurl,{
           myObj : {
                name: obj.data.myObj.name,
                description : obj.data.myObj.description,
                price : obj.data.myObj.price,
                quantity : obj.data.myObj.quantity-1 ,
           }
          
        }).then(
            location.reload()
        )
          .catch(err=> console.log(err))    
        
        }).catch(err=> console.log(err));

    }

}

list.addEventListener('click' , buytwo )
function buytwo(e){
   
    

    if(e.target.classList.contains('buytwo')){
 
        var li = e.target.parentElement;
        console.log(li.firstChild.textContent) 
        let url = "https://crudcrud.com/api/317f6a6b813448d090d9cf5612799aa6/userdata/"
        let fullurl = url.concat(li.firstChild.textContent)
        console.log(fullurl)

         this.q = 0
         that = this;
        axios.get(fullurl).then(obj =>{console.log(obj.data.myObj.quantity-1); 
        
            axios.put(fullurl,{
    
                myObj : {
                    name: obj.data.myObj.name,
                    description : obj.data.myObj.description,
                    price : obj.data.myObj.price,
                    quantity : obj.data.myObj.quantity-2 ,
               }
          
        }).then(
            location.reload()
        )
          .catch(err=> console.log(err))    
        
        }).catch(err=> console.log(err));

    }

}




 
 



