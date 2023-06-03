const Sib = require('sib-api-v3-sdk')
const uuid = require('uuid');
const sgMail = require('@sendgrid/mail');
const bcrypt = require('bcrypt');
require('dotenv').config()
const User = require('../models/userModel')
const Forgotpassword = require('../models/forgotPassword')

exports.forgotPassword = async (req,res,next)=>{
    //console.log(req.body.email)
    const client = Sib.ApiClient.instance
    const apiKey = client.authentications['api-key']
    apiKey.apiKey = process.env.API_KEY
    const tranEmailApi = new Sib.TransactionalEmailsApi()
  
    try{
     const email = req.body.email
     const user = await User.findOne({where : { email: email }});
     if(user){
      const id = uuid.v4();
      user.createForgotpassword({ id , active: true })
                .catch(err => {
                    throw new Error(err)
                })

                const sender = {
                  email: 'prashast9450@gmail.com',
                  name: 'prashast'
                }
              
                const receivers = [
                  {
                    email: req.body.email
                  },
                ]
              
                tranEmailApi.sendTransacEmail({
                  sender,
                  to: receivers,
                  subject: 'password reset',
                  textContent:  `Hello! this is ypur password reset link. http://localhost:4000/resetpassword/${id}`,
                //  html: `<a href="http://localhost:4000//resetpassword/${id}">Reset password</a>`,
              }).then(console.log('sent'))

        
     
     
              }
    }
    
    catch(error){
      console.log(error)
    }
  }


  exports.resetpassword = (req, res) => {
    const id =  req.params.id;
    console.log('params'+id)
    Forgotpassword.findOne({ where : { id }}).then(forgotpasswordrequest => {
        if(forgotpasswordrequest){
            forgotpasswordrequest.update({ active: false});
            res.status(200).send(`<html>
                                    <script>
                                        function formsubmitted(e){
                                            e.preventDefault();
                                            console.log('called')
                                        }
                                    </script>

                                    <form action="/updatepassword/${id}" method="get">
                                        <label for="newpassword">Enter New password</label>
                                        <input name="newpassword" type="password" required></input>
                                        <button>reset password</button>
                                    </form>
                                </html>`
                                )
            res.end()

        }
    })
}


exports.updatepassword = (req, res) => {

  try {
      const { newpassword } = req.query;
      const { resetpasswordid } = req.params;
      Forgotpassword.findOne({ where : { id: resetpasswordid }}).then(resetpasswordrequest => {
          User.findOne({where: { id : resetpasswordrequest.userId}}).then(user => {
              // console.log('userDetails', user)
              if(user) {
                  //encrypt the password

                  const saltRounds = 10;
                  bcrypt.genSalt(saltRounds, function(err, salt) {
                      if(err){
                          console.log(err);
                          throw new Error(err);
                      }
                      bcrypt.hash(newpassword, salt, function(err, hash) {
                          // Store hash in your password DB.
                          if(err){
                              console.log(err);
                              throw new Error(err);
                          }
                          user.update({ password: hash }).then(() => {
                              res.status(201).json({message: 'Successfuly update the new password'})
                          })
                      });
                  });
          } else{
              return res.status(404).json({ error: 'No user Exists', success: false})
          }
          })
      })
  } catch(error){
      return res.status(403).json({ error, success: false } )
  }

}


