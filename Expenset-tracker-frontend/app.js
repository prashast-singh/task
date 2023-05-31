// dependencies
const express = require('express')
const path = require('path')
 const app = express()

//FRONTEND
app.use(express.static(path.join(__dirname,'public','script')))

app.use('/expenseview',(req,res,next)=>{
   res.sendFile(path.join(__dirname, 'views', 'expense.html')) 
})

app.use('/login',(req,res,next)=>{
    res.sendFile(path.join(__dirname, 'views', 'login.html')) 
 })

app.use('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})







// listen on port

app.listen(3000);

