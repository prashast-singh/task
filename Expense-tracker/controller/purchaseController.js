const Razorpay = require('razorpay');
const Order = require('../models/orderModel');
const User = require('../models/userModel')
const Expense = require('../models/expenseModel')

exports.purchasePremium = async(req, res) =>{
     try{ 

         var rzp  = new Razorpay({
                key_id: 'rzp_test_iQuNG5THAQLRFH',
                key_secret: 'I2cAhT8g40IowFyeKh5LYGKz'
    
    
            })

        const amount  = 2500;
       
        rzp.orders.create({amount, currency: "INR"},(err, order)=>{
            if(err){
                console.log(err)
                throw new Error(JSON.stringify(err))
            }
            req.user.createOrder({orderid: order.id, status: "PENDING"})
            .then(()=>{
                return res.status(201).json({order, key_id: rzp.key_id})
            })
            .catch(err=>{
                throw new Error(JSON.stringify(err))
            })
        })
    } 
    catch(error){
       console.log(error);
       res.status(403).json({message: "something went wrong", error: error});
    } 
}

exports.updatePurchase = async (req, res, next)=>{
    const {payment_id, order_id} = req.body
    await req.user.update({premiumUser: true})
    const order = await Order.findOne({where: {orderid: order_id}})
    await order.update({paymentid: payment_id, status: "SUCCESSFUL"})
    res.status(201).json({success: true, message: "transcation successful"})
}

exports.updateFailure = async (req, res, next)=>{
    const { order_id} = req.body
    const order = await Order.findOne({where: {orderid: order_id}})
    await order.update({status: "FAILED"})
    res.status(201).json({message: "payment failed"})
}


exports.getLeaderboard = async(req, res, next)=>{
    
    // using joins const user = await User.findAll({include: Expense})

    const user = await User.findAll({
        attributes: ['name', 'totalExpense']
      });

      console.log(user)


    
       let array = []

    for(let i = 0 ; i<user.length; i++){

        array.push([user[i].totalExpense, user[i].name])
     }
    
     console.log(array)
 

     array.sort(sortFunction);

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}

console.log(array)

res.json({leaderboard: array}) 

}