const User = require('../models/userModel')
const { use } = require('../routes/loginRoute')


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
   if(obj.password === password)
   res.json({e:"login successfull", status: "true"})
   
   else{
      res.status(401).json({e:"wrong password", status: "false"})
  }
}).catch(err => res.status(401).json({e:"account does not exist", status: "false"})) 
        

}