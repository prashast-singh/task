
let form = document.getElementById('addForm');
let list = document.getElementById('item');

form.addEventListener('submit', addItem)
list.addEventListener('click' , buytwo )
list.addEventListener('click' , buyone )

 const displayitems = async ()=>{
    const obj = await axios.get('https://crudcrud.com/api/f889a1ab23cd4a1580d3ccbdf008570f/userdata');
    displaylist(obj.data)
}


displayitems()

//axios.get('https://crudcrud.com/api/08dc5248e882495bbe93f1d5fa88bc79/userdata').then(obj =>{ displaylist(obj.data)}).catch(err=>console.log(err));


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
    e.preventDefault(); 
 
    

     myObj = {
    name: form.children[1].value,
    description : form.children[3].value,
    price : form.children[5].value,
    quantity : form.children[7].value,
    };
    let str = JSON.stringify(myObj);

    console.log(str)
    axios.post('https://crudcrud.com/api/f889a1ab23cd4a1580d3ccbdf008570f/userdata',{myObj}).then(e =>displaylist(e)).catch(err => console.log(err))
    
    location.reload()
       
};


function buyone(e){
    e.preventDefault();
    

    if(e.target.classList.contains('buyone')){
 
        var li = e.target.parentElement;
        console.log(li.firstChild.textContent) 
        let url = "https://crudcrud.com/api/f889a1ab23cd4a1580d3ccbdf008570f/userdata/"
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


function buytwo(e){
   
    e.preventDefault(); 

    if(e.target.classList.contains('buytwo')){
 
        var li = e.target.parentElement;
        console.log(li.firstChild.textContent) 
        let url = "https://crudcrud.com/api/f889a1ab23cd4a1580d3ccbdf008570f/userdata/"
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




 
 



