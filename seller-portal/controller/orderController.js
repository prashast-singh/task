const Order = require('../models/orderModel')

exports.postOrder = (req, res, next)=>{
    const amount = req.body.myObj.amount;
    const description = req.body.myObj.description;
    Order.create({
        amount : amount,
        description : description,
    }).then(e=>{
        res.json(e)}).catch(err => console.log(err))  
    }
    
    
exports.getOrder = (req, res, next)=>{
    Order.findAll()
    .then(order => {
        console.log('ordersssss')
        res.json(order)}).catch(err=> console.log(err))
    }

  exports.putOrder = (req, res, next)=>{
    const id = req.body.id;
    const updatedAmount = req.body.amount;
    const updatedDescription = req.body.description;

    Order.findByPk(id)
    .then(
        order=>{
         order.amount = updatedAmount;
         order.description = updatedDescription;

         return order.save()
        }
    ).then(order => res.json(order)).catch(err => console.log(err))
    
}  

exports.deleteOrder = (req, res, next) =>{
    const id = req.body.id;
    Order.destroy({where :{ id : id}}).then(order => res.json(order)).catch(err=> console.log(err))
}






    

    
