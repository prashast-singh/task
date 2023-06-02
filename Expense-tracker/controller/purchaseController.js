const Razorpay = require('razorpay');
const Order = require('../models/orderModel');
const User = require('../models/userModel')
const Expense = require('../models/expenseModel')

exports.purchasePremium = async(req, res) =>{
     try{ 

         var rzp  = new Razorpay({
                key_id: 'rzp_test_h8bXjaaUFmCz3s',
                key_secret: 'EKDSpziSPcFdqtbTxYJ3LD8W'
    
    
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
    const user = await User.findAll({include: Expense})
    let array = []

    for(let i = 0 ; i<user.length; i++){
     let totalExpense = 0;
     {
        for(let j = 0; j<user[i].expenses.length; j++){
            totalExpense+= user[i].expenses[j].amount
        }

        array.push([totalExpense, user[i].name])

        console.log("total expense of " + JSON.stringify(user[i].name) + "is" + totalExpense)
     }
    }

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