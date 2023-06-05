const Expense = require('../models/expenseModel')
const Sequelize = require('../helper/database');
const  {Op}  = require('sequelize');

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
    let weeklyExpense = []
    let week =[]
    for(let i = 0; i<expense.length; i++){
      if(expense[i].updatedAt.toString().split(" ")[1] === req.headers.month){
        
        expenseArry.push({
            id: expense[i].id,
            amount: expense[i].amount,
            description: expense[i].description,
            category: expense[i].category,
            month: expense[i].updatedAt.toString().split(" ")[1],
            date:   expense[i].updatedAt.toString().split(" ")[2]
        })
      }
    
    }
   res.status(201).json(expenseArry)
    
}

exports.weeklyExpense = async(req, res, next)=>{
    const userId = req.user.id
   
  ////////////// 
  
    var week = parseInt(req.headers.week);
    var month = parseInt(req.headers.month);
    var year = 2023;
    console.log("week"+ week)
    console.log("month"+month)
    var PositiveOneDay = new Date(new Date('1/2/2000') - new Date('1/1/2000'));
    var NegetiveOneDay = new Date(new Date('1/1/2000') - new Date('1/2/2000'));      
    var dt , stDate , endDate
    //Get first day of month
    dt = new Date(month + '/1/' + year);
    //Seek to intended week
    var i = 1;
    for(i = 1 ; i < (week-1)*7 ; i++){
        dt = new Date(dt - NegetiveOneDay);
    }  
    //if found date is week end get immediate next week start date
    while (dt.getDay() == 0 || dt.getDay() == 6){
        dt = new Date(dt - NegetiveOneDay);
    }   
    //if found date is in next month then invalid input
    if (dt.getMonth() == month - 1){
        stDate = dt;
        endDate = dt;
        //Seek to week start date
        while (stDate.getDay() != 0)
        {
            stDate = new Date(stDate - PositiveOneDay);
        }
        //Seek to week end date
        while (endDate.getDay() != 6)
        {
            endDate = new Date(endDate - NegetiveOneDay);
        }
                      
      console.log('Starting date of a week : ' + stDate.toString());
      
      
      console.log('Ending date of a week : ' + endDate.toString());

      Expense.findAll({where : { updatedAt : {[Op.between] : [stDate  ,endDate]}, userId: userId  }})
.then((result) => { 
    console.log(result)
    res.status(201).json(result)
})
.catch((error) =>  console.log(error))

      
      
      

    }      
    else{
        alert('Invalid Input');
    } 
    
}






    

    
