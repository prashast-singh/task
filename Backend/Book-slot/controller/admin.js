const rootDir = require('../helper/path');
const path = require('path')
const Appointment = require('../models/appointment')

/* exports.postAppointment = (req, res, next)=>{
console.log(req.body.myObj.email);
const name = req.body.myObj.name;
const phone = req.body.myObj.phone;
const email = req.body.myObj.email;
 Appointment.create({
    name : name,
    phone : phone,
    email : email,
}).then(()=>{res.redirect('/')}).catch(err => console.log(err)) 
} */

exports.getPage = (req, res, next)=>{
    res.sendFile(path.join(rootDir, "views", "index.html"))
}