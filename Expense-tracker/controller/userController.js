const User = require('../models/userModel')

exports.postUser = (req, res,next)=>{
    
     const name = req.body.myObj.name
    const email = req.body.myObj.email
    const password = req.body.myObj.password

     User.create({
        name: name,
        email: email,
        password: password,
    }).then(e => res.json(e)).catch(err=> console.log(err)) 
}