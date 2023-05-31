const Expense = require('../models/expenseModel')

exports.postExpense = (req, res, next)=>{
    const amount = req.body.myObj.amount;
    const description = req.body.myObj.description;
    const category = req.body.myObj.category;
    Expense.create({
        amount : amount,
        description : description,
        category : category,
    }).then(e=>{
        res.json(e)}).catch(err => console.log(err))  
    }
    
    
exports.getExpense = (req, res, next)=>{
    Expense.findAll().then(expense => res.json(expense)).catch(err=> console.log(err))
    }

 exports.putExpense = (req, res, next)=>{
    const id = req.body.id;
    const updatedAmount = req.body.amount;
    const updatedDescription = req.body.description;
    const updatedCategory = req.body.category;

    Expense.findByPk(id)
    .then(
        expense=>{
         expense.amount = updatedAmount;
         expense.description = updatedDescription;
         expense.category = updatedCategory;

         return expense.save()
        }
    ).then(expense => res.json(expense)).catch(err => console.log(err))
    
} 

exports.deleteExpense = (req, res, next) =>{
    const id = req.body.id;
    Expense.destroy({where :{ id : id}}).then(expense => res.json(expense)).catch(err=> console.log(err))
}




    

    
