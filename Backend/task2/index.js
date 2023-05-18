// TASK 1

const fruits =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

console.log(fruits.map(fruit =>{if(fruit===' ')
                                  return 'empty string'

                                  return fruit
                                }
                        )          
            )


 const copiedarray = [...fruits]
copiedarray.push('arr');
 console.log(copiedarray)
 console.log(fruits)
 // TASK 2
 const print = async ()=>{
    console.log('a');

    console.log('b');

    const promiseC = new Promise((resolve, reject)=>{
        setTimeout(() =>{resolve('c')}, 3000);
    }) ;

    let c = await promiseC;
     console.log(c);


     const promiseD = new Promise((resolve, reject)=>{
        setTimeout(() =>{console.log('d');  resolve('d')}, 0);
    }) ;

    let d = await promiseD;
     
    

    console.log('e');

 }
 

print()







/* const add = (a,b) =>{
    return a*b;
}

console.log(add(3,4));

const Student = {
    name: 'prashast',
    rollNo: '21',

    intro(){
    console.log('hi my name is ' + this.name + ' and my roll no is ' + this.rollNo );
   },
};

Student.intro() */