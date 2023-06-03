const Expense = require('../models/expenseModel')
const Sequelize = require('../helper/database');
exports.postExpense = async (req, res, next)=>{
    const amount = req.body.myObj.amount;
    const description = req.body.myObj.description;
    const category = req.body.myObj.category;
    const user = req.user;
   
 const t = await Sequelize.transaction();

   try{
   const expense =  await req.user.createExpense({
        amount : amount,
        description : description,
        category : category,
        
   },{ transaction: t })
   
  
   user.totalExpense += parseInt (amount)
        await user.save({ transaction: t })
        await t.commit();
        res.json(expense)
    }
    catch(error){
        await t.rollback();
        res.status(401).json({success: false})
        throw new Error(JSON.stringify(error))
    }
 
    
    }
    
    
exports.getExpense = (req, res, next)=>{
    //const token = req.headers.authorization
    
   //const userId =  jwt.verify(token, 'shhhhh')
   const userId = req.user.id
   
    //Expense.findAll({where:{userId: userId.userId}}).then(expense => res.json(expense)).catch(err=> console.log(err))
    Expense.findAll({where:{userId: userId}}).then(expense => res.json(expense)).catch(err=> console.log(err))

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




exports.monthlyExpense = async(req, res, next)=>{
    const userId = req.user.id
    console.log(req.headers.month)
 let expense =  await Expense.findAll({where:{userId: userId}})
    let expenseArry = []
    for(let i = 0; i<expense.length; i++){
       console.log(expense[i].updatedAt.toString().split(" ")[1]) 
       console.log(expense[i].updatedAt)
      if(expense[i].updatedAt.toString().split(" ")[1] === req.headers.month){
        expenseArry.push({
            id: expense[i].id,
            amount: expense[i].amount,
            description: expense[i].description,
            category: expense[i].category,
            month: expense[i].updatedAt.toString().split(" ")[1]
        })
      }
    
    } 
    console.log(expenseArry)
    res.status(201).json(expenseArry)
}




    

    
