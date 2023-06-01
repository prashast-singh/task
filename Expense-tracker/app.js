// dependencies
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

//route
const userRoute = require('./routes/userRoute')
const loginRoute = require('./routes/loginRoute')
const expenseRoute = require('./routes/expenseRoute')
const purchaseRoute = require('./routes/purchaseRoute')

//models
const User = require("./models/userModel")
const Expense = require("./models/expenseModel")
const Order = require('./models/orderModel')

//database
const sequelize = require('./helper/database')
const app = express()

app.use(cors())
app.use(bodyParser.json({extended: false}))

//route middlewares
app.use(loginRoute)
app.use(userRoute)
app.use(expenseRoute)
app.use(purchaseRoute)
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

User.hasMany(Order)
Order.belongsTo(User)


// listen on port
sequelize.sync().then(result =>{
    app.listen(4000);
})
.catch(err =>{
    console.log(err)
});


