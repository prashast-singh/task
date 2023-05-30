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
            .catch(err => console.log(err))
}