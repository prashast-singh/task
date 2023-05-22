const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
//const Appointment = require('./models/appointment')
const sequelize = require('./helper/database')

//root directory
const rootDir = require("./helper/path")
//routers
const adminRoutes = require('./routes/admin')
const appointmentRoutes = require('./routes/appointment')


const app = express()
app.use(cors())

app.use(bodyParser.json({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', adminRoutes)
app.use(appointmentRoutes)

sequelize.sync().then(result =>{
    app.listen(4000);
})
.catch(err =>{
    console.log(err)
});