const express =require('express')
const router = express.Router()

router.use("/", (req, res, next)=>{
//res.send(`<script>document.write(localStorage.getItem("username"))</script>`)
//res.send(`<html><intput type ="text" name="chat"></intput><button>Send Chat</button></html>`)
res.send(`<p>welcome to chat page</p>`)
res.end()
})

module.exports = router