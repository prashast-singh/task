// dependencies
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

//controllers
const userRoute = require('./routes/userRoute')

//database
const sequelize = require('./helper/database')
const app = express()

app.use(cors())
app.use(bodyParser.json({extended: false}))

//route middlewares
app.use(userRoute)


app.use(express.static(path.join(__dirname,'public','script')))
app.use('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})



// listen on port
sequelize.sync().then(result =>{
    app.listen(4000);
})
.catch(err =>{
    console.log(err)
});


