const add = (a,b) =>{
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

Student.intro()