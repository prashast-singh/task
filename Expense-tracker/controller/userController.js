const User = require('../models/userModel')
const bcrypt = require('bcrypt')

exports.postUser = (req, res,next)=>{
    
     const name = req.body.myObj.name
    const email = req.body.myObj.email
    const password = req.body.myObj.password

    if(name.length == 0|| email.length ==0 || password.length==0){
        return res.status(500).json({err: 'something is missing'})
    }

    saltRounds = 10
    bcrypt.hash(password, saltRounds, async(err, hash)=> {
       try{
       const e = await  User.create({
            name: name,
            email: email,
            password: hash,
        });
       
       res.json(e);

       }

       catch(err){
        res.status(400).json({err: 'email already registered'})
       }
    });
}