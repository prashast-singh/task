let form = document.getElementById('loginForm')

form.addEventListener('submit', login)

function login(e){
    e.preventDefault();
    myObj = {
        email: form.children[1].value,
        password: form.children[3].value,
    }

    axios.post('http://localhost:4000/login',{myObj})
            .then(e=> {

               if(e.data.e==="/expenseview"){
                localStorage.setItem('token', e.data.token)
                localStorage.setItem('premiumUser', e.data.premiumUser)

                window.location= "./expense.html"
               }
             

                //
            //    let successPara=   document.createElement('p');
             //   successPara.appendChild(document.createTextNode("Success: " + e.data.e));
             //   form.appendChild(successPara)
            })
            .catch(e => {
             let errPara=   document.createElement('p');
             errPara.appendChild(document.createTextNode("Error: " + e.response.data.e));
             form.appendChild(errPara)
            })
}

//JSON.stringify(err.response.data.err)