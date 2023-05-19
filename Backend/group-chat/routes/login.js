const express =require('express')
const router = express.Router()
const fs = require('fs')
router.get('/login',(req, res, next)=>{
    res.send(`
    <form onsubmit = "myFunction()" action="/" method="GET">
    <input id="username" type="text" name"title"> </input>
    <button>submit</submit>
    </form>

    <script>
function myFunction() {
localStorage.setItem("username", document.getElementById("username").value)
}
</script>
    `)
    return res.end()
})
//
router.get('/',(req,res,next)=>{
    fs.readFile("message.txt", (err,data)=>{
        if(err)
        data = "no chat"


    res.send(` ${data}
        <form action="/" method="POST" > 
        <input type = "text" name="chat"></input>
        <input type = "text" name="name"  id ="name" style ="display:none"></input>
        <button>send chat</button>
        </form>

      <script>
        document.getElementById("name").value = localStorage.getItem("username");
        </script>`)

res.end()     

    })
    
})

router.post('/', (req, res, next)=>{
  fs.writeFile("message.txt", `${req.body.name} : ${req.body.chat}--`, {flag:"a"}, (err)=>{
    err?console.log(err) : res.redirect("/")
  })

})

module.exports = router