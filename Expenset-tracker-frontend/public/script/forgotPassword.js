const form = document.getElementById('form')
const button = document.getElementById('ResetBtn')
document.getElementById('ResetBtn').onclick = ()=>{
   const email = form.children[2].value
   axios.post('http://localhost:4000/resetpassword',{email: email}).then(res=>{
    document.write(res.data)
   })
}