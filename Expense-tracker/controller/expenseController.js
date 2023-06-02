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




    

    
