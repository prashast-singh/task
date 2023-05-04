console.log("person 1 show ticket")
console.log("person 2 shows ticket")

const premovie = async() =>{
    const promiseWifeBringingTicket = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    });

    let ticket = await promiseWifeBringingTicket

    console.log("wife: i have " + ticket);
    console.log("hus: lets go");
    console.log("wife: i am hungry");

    const getpopcorn = new Promise((resolve, reject)=>{
           setTimeout(()=>{
            resolve('popcorn')
           },2000)
    });

    let popcorn = await getpopcorn;

    console.log(`hus: i got ${popcorn} lets go`)
    console.log("wife: i need some cold drink")

    const getcoldd = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("cold drinks")
        },2000)
    });

    let coldd = await getcoldd

    console.log(`hus: i got ${coldd} lets go`);

    return ticket


}

premovie().then((e)=>console.log(e));




console.log("person 4 shows ticket")