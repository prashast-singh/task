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