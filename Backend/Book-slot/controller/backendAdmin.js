
const Appointment = require('../models/appointment')

exports.postAppointment = (req, res, next)=>{

const name = req.body.myObj.name;
const phone = req.body.myObj.phone;
const email = req.body.myObj.email;
 Appointment.create({
    name : name,
    phone : phone,
    email : email,
}).then(e=>{
    console.log(e.dataValues)
    res.json(e.dataValues)}).catch(err => console.log(err)) 
} 


exports.getAppointment = (req, res, next)=>{
Appointment.findAll().then(appointment => res.json(appointment))
}

exports.deleteAppointment = (req, res, next)=>{
    const appid = req.body.id
    console.log(appid)
Appointment.destroy({where :{id : appid}}).then((e)=> res.json(e))
}