// using express
const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req, res, next)=>{
    res.send(`<form action = "/product" method="POST"><input type = "text" name="productName"></><input type = "text" name="quantity"></input><button type="submit">SUBMIT</button></form>`)
    return res.end()
})

app.use('/product', (req, res, next)=>{
console.log(req.body.productName)
console.log(req.body.quantity)
res.redirect('/')
return res.end()
})

app.use("/", (req, res, next)=>{
    res.send(`<h1>welcome</h1>`)
    res.end()
})


app.listen(4000);