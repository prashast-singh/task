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


module.exports = router