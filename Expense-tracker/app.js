// dependencies
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const fs = require('fs')
require('dotenv').config()
//route
const userRoute = require('./routes/userRoute')
const loginRoute = require('./routes/loginRoute')
const expenseRoute = require('./routes/expenseRoute')
const purchaseRoute = require('./routes/purchaseRoute')
const resetPassword = require('./routes/resetPassword')

//models
const User = require("./models/userModel")
const Expense = require("./models/expenseModel")
const Order = require('./models/orderModel')
const Forgotpassword = require('./models/forgotPassword');
const Url = require('./models/urlModel')

//database
const sequelize = require('./helper/database')
const app = express()

const accessLogs = fs.createWriteStream(path.join(__dirname, 'access.log'),
{flags: 'a'});

app.use(cors())
app.use(helmet())
app.use(morgan('combined', {stream: accessLogs}))
app.use(bodyParser.json({extended: false}))
//route middlewares
app.use(loginRoute)
app.use(userRoute)
app.use(expenseRoute)
app.use(purchaseRoute)
app.use(resetPassword)
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

User.hasMany(Forgotpassword);
Forgotpassword.belongsTo(User);

User.hasMany(Url)
Url.belongsTo(User)


// listen on port
sequelize.sync().then(result =>{
    app.listen(4000);
})
.catch(err =>{
    console.log(err)
});


