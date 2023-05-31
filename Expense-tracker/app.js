// dependencies
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

//controllers
const userRoute = require('./routes/userRoute')
const loginRoute = require('./routes/loginRoute')
const expenseRoute = require('./routes/expenseRoute')

//models
const User = require("./models/userModel")
const Expense = require("./models/expenseModel")

//database
const sequelize = require('./helper/database')
const app = express()

app.use(cors())
app.use(bodyParser.json({extended: false}))

//route middlewares
app.use(loginRoute)
app.use(userRoute)
app.use(expenseRoute)

//FRONTEND
/* app.use(express.static(path.join(__dirname,'public','script')))

app.use('/expenseview',(req,res,next)=>{
   res.sendFile(path.join(__dirname, 'views', 'expense.html')) 
})

app.use('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
}) */




User.hasMany(Expense)
Expense.belongsTo(User)


// listen on port
sequelize.sync().then(result =>{
    app.listen(4000);
})
.catch(err =>{
    console.log(err)
});


