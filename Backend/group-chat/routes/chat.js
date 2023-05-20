const express =require('express')
const router = express.Router()

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