let token = localStorage.getItem("token")
let list = document.getElementById('list')
axios.get('http://localhost:4000/download/history', {headers:{"authorization": token}})
        .then(obj =>{displaylist(obj.data)}).catch(err=>console.log(err))
   

function displaylist(obj){

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    Object.keys(obj).forEach(key => {
    
        let li =  document.createElement('li');
        li.className = 'mb-2'
        li.appendChild(document.createTextNode(obj[key].createdAt +'-' +obj[key].url));
        list.appendChild(li); 

      });
 
      

};
