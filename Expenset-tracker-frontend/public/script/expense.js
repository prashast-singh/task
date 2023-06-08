
let form = document.getElementById('addForm');
let list = document.getElementById('item');
let formButton = document.getElementById('SubmitBtn')
let leaderboardDiv = document.getElementById('leaderboradDiv')
let  pagination = document.getElementById('pagination')

form.addEventListener('submit', addItem)
list.addEventListener('click', removeItem)
list.addEventListener('click' , edit )
document.addEventListener('click', leaderboard)

let token = localStorage.getItem("token")
let premiumUser = localStorage.getItem("premiumUser")

function leaderboard(e){
    if(e.target.classList.contains('leaderboard')){
        
        const getLeaderboard = async()=>{
        const response = await axios.get('http://localhost:4000/leaderboard', {headers:{"authorization": token}})
        console.log(response)

        let leaderboardDivChild =  leaderboardDiv.childElementCount;

        if(leaderboardDivChild>0){
            leaderboardDiv.removeChild(leaderboardDiv.children[1])
        }

        leaderboardDiv.appendChild(document.createTextNode("LEADERBOARD"))
        let ul = document.createElement('ul')

        const leaderboard = response.data.leaderboard

        for(let i = 0; i<leaderboard.length; i++){
            let li = document.createElement('li')
            li.appendChild(document.createTextNode(leaderboard[i][1] + " " + leaderboard[i][0]))
            ul.appendChild(li)
        }
        
        leaderboardDiv.appendChild(ul)

    }
    getLeaderboard();
    

}

}





document.getElementById("rzp-button1").onclick = async function(e){
    const response = await axios.get('http://localhost:4000/premium', {headers:{"authorization": token}})
    console.log(response)

     var options ={
        "key": response.data.key_id,
        "order_id": response.data.order.id,

        "handler": async (response)=>{
            await axios.post('http://localhost:4000/premium',{
                order_id: options.order_id,
                payment_id: response.razorpay_payment_id,
            },{headers:{"authorization": token}})

        localStorage.setItem('premiumUser', "true")

           alert('you are premium user now')  
           location.reload()
        }

    }
    
    const rzp1 = new Razorpay(options);
    rzp1.open();
    e.preventDefault();

    rzp1.on('payment.failed', async function(response){
        await axios.post('http://localhost:4000/paymentfailure',{
                order_id: options.order_id,
            },{headers:{"authorization": token}})
        
            alert("Transaction failed")
    })
}

if(premiumUser==="true"){
    var premiumButton = document.getElementById("rzp-button1")

    let p = document.createElement('div')
    let premiumMessage = document.createTextNode('Congrats! You are a premium user now')
    p.appendChild(premiumMessage)
    
    let b = document.createElement('div')
    btn = document.createElement('button');
    btn.className = 'btn btn-sm btn-danger float-right  leaderboard';
    btn.id = "leaderboardBtn"
    btn.appendChild(document.createTextNode('Show Leaderboard'));
    b.appendChild(btn)
    
   premiumButton.parentNode.appendChild(b)
   premiumButton.parentNode.appendChild(p)
   premiumButton.parentNode.removeChild(premiumButton)
   
   let weeklyButton = document.createElement("button")
   weeklyButton.className = 'btn btn-sm btn-danger float-right  weeklyButton ml-2';
   weeklyButton.appendChild(document.createTextNode('Show Weekly'))

   let monthlyButton = document.createElement("button")
   monthlyButton.className = 'btn btn-sm btn-danger float-right  monthlyButton ml-2';
   monthlyButton.appendChild(document.createTextNode('Show Monthly'))
   
   let downloadButton = document.createElement("button")
   downloadButton.className = 'btn btn-sm btn-danger float-right  downloadButton ml-2';
   downloadButton.appendChild(document.createTextNode('Download Report'))

   let historyButton = document.createElement("button")
   historyButton.className = 'btn btn-sm btn-danger float-right  historyButton ml-2';
   historyButton.appendChild(document.createTextNode('Download History'))
   
   var premiumFeatureDiv = document.getElementById('premiumFeatures')
   premiumFeatureDiv.appendChild(historyButton)
   premiumFeatureDiv.appendChild(downloadButton)
   premiumFeatureDiv.appendChild(monthlyButton)
   premiumFeatureDiv.appendChild(weeklyButton)

    premiumFeatureDiv.addEventListener("click",(e)=>{

    if(e.target.classList.contains('monthlyButton')){
            location.href= './monthlyTable.html'
        }    
    if(e.target.classList.contains('historyButton')){
     location.href= './historyTable.html'
        }

    if(e.target.classList.contains('weeklyButton')){
        location.href= './weeklyTable.html'
       }

    if(e.target.classList.contains('downloadButton')){
        axios.get('http://localhost:4000/download', {headers:{"authorization": token}})
        .then((response) => {
            if(response.status === 200){
                //the bcakend is essentially sending a download link
                //  which if we open in browser, the file would download
                 var a = document.createElement("a");
                a.href = response.data.fileURL;
                a.download = 'myexpense.csv';
                a.click(); 
              //  document.write(JSON.stringify(response))
            } else {
                throw new Error(response.data.message)
            }
    
        }).catch(err=>console.log(err))
       }

    
       if(e.target.classList.contains('historyButton')){
        location.href= './historyTable.html'
       }


}) 

}

let pageno = 1;
axios.get(`http://localhost:4000/expense?pageno=${pageno}`, {headers:{"authorization": token, "pageno":pageno}})
.then(obj =>{ displaylist(obj.data.expense, obj.data.hasNext, obj.data.hasPrevious)}).catch(err=>console.log(err))


 
function displaylist(obj, hasNext, hasPrevious){
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
      if(hasNext==='true'){
        
     
        let nxtbtn =  document.createElement('button')
        nxtbtn.appendChild(document.createTextNode('next page'))
        nxtbtn.className = ' float-right next ml-2';
        pagination.appendChild(nxtbtn)
   
   
         nxtbtn.onclick = ()=>{
          pageno = pageno+1
           axios.get(`http://localhost:4000/expense?pageno=${pageno}`, {headers:{"authorization": token, "pageno":pageno}})
           .then(obj =>{ 
               
               while (pagination.firstChild) {
                   pagination.removeChild(pagination.firstChild);
               }
               displaylist(obj.data.expense, obj.data.hasNext, obj.data.hasPrevious)}).catch(err=>console.log(err))
   
        } 
          
         }

      if(hasPrevious==='true'){
        
     
        let prevbtn =  document.createElement('button')
        prevbtn.appendChild(document.createTextNode('previous page'))
        prevbtn.className = ' float-right previous ml-2';
        pagination.appendChild(prevbtn)
   
   
         prevbtn.onclick = ()=>{
          pageno = pageno-1
           axios.get(`http://localhost:4000/expense?pageno=${pageno}`, {headers:{"authorization": token, "pageno":pageno}})
           .then(obj =>{ 
            while (pagination.firstChild) {
                pagination.removeChild(pagination.firstChild);
            }
               displaylist(obj.data.expense, obj.data.hasNext, obj.data.hasPrevious)}).catch(err=>console.log(err))
   
        } 
          
         }
};


function addItem(e){
    e.preventDefault();
 
    if(formButton.classList.contains('SubmitButton')){
        myObj = {
            amount: form.children[1].value,
            description : form.children[3].value,
            category : form.children[5].value,
           // authorization: token
            };
            let str = JSON.stringify();
            axios.post('http://localhost:4000/expense',{myObj},{headers:{"authorization": token} })
            .then(e=> {
            //form.appendChild(document.createTextNode({key: e.data}))
           // displaylist({key: e.data})
           location.reload()
            })
            .catch(err => alert("something went wrong"))
            
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
