const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.postLogin = (req, res,next)=>{
   const email = req.body.myObj.email
   const password = req.body.myObj.password

   console.log(email)
   console.log(password)

     if(email.length ==0 || password.length==0){
       return res.status(500).json({err: 'something is missing'})
   } 

  User.findOne({where:{email: email}})
  .then(obj=>{

    bcrypt.compare(password, obj.password).then(async (result)=> {
      if(result === true){

      var token = jwt.sign({ userId: obj.id}, 'shhhhh');

      
     console.log(token)
     res.json({e:"/expenseview", status: "true", token: token})
      }
      
     
      else{
        res.status(401).json({e:"wrong password", status: "false"})
     }

  });
  
}).catch(err => res.status(404).json({e:"account does not exist", status: "false"})) 
        

}
////////////////////


