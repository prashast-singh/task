const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


module.exports =async(req, res, next) =>{
try{
   //  const token = req.body.myObj.authorization
   const token = req.headers.authorization
   //console.log(req.body.token)
   //console.log(req.body.myObj)
   const userId = await jwt.verify(token, 'shhhhh').userId
   User.findByPk(userId).then(user =>{
    console.log("auth middleware success")
    req.user = user;
    next();

   }).catch(err => console.log("error: "+err))

   

}
catch(error){
console.log("error: "+error);
}
}