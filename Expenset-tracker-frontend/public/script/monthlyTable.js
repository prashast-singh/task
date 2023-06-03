let list = document.getElementById('list')
let token = localStorage.getItem("token")
let form = document.getElementById("monthForm")
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('getDetails')){
      //  alert(form.children[1].value)
        axios.get('http://localhost:4000/expense/monthly', {headers:{"authorization": token, "month":form.children[1].value}})
        .then(obj =>{displaylist(obj.data)}).catch(err=>console.log(err))
    }

})


function displaylist(obj){

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
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

        li.appendChild(document.createTextNode("Rs."+obj[key].amount +"- " + obj[key].description + " - " + obj[key].category));
        li.appendChild(btn);
        li.appendChild(edtbtn)

        
        
        list.appendChild(li); 

      });
 
      

};
