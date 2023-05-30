let form = document.getElementById('signUpForm')

form.addEventListener('submit', addUser)

function addUser(e){
    e.preventDefault();
    myObj = {
        name: form.children[1].value,
        email: form.children[3].value,
        password: form.children[5].value
    }

    axios.post('http://localhost:4000/user',{myObj})
            .then(e=> {
           location.reload()
            })
            .catch(err => {
             let errPara=   document.createElement('p');
             errPara.appendChild(document.createTextNode("Error: " + err.response.data.err));
             form.appendChild(errPara)
            })
}

//JSON.stringify(err.response.data.err)