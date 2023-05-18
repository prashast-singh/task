const express = require('express');
const router = express.Router();

router.get('/add-product',(req, res, next)=>{
    res.send(`<form action = "/product" method="POST"><input type = "text" name="productName"></><input type = "text" name="quantity"></input><button type="submit">SUBMIT</button></form>`)
    return res.end()
})

router.post('/product', (req, res, next)=>{
console.log(req.body.productName)
console.log(req.body.quantity)
res.redirect('/')
return res.end()
})

module.exports = router
