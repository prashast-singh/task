var lastactivity = "";
const posts = [
    {
        title: 'Post1'
    },
]


/* function createpost3(){
    
    return 

}

function deletepost(){
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=> {
            if(posts.length>0){
                const poppedvalue = posts.pop()
                resolve(poppedvalue);
            }
    
            else
            {
                reject("Array is empty")
            }

        },1000)
        
        
       
    })
}

function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}

 */



const lastseen = async()=>{
    const cp2 = new Promise((resolve, reject) => {
        
        setTimeout(() => {
           posts.push({title: 'post2'})
           resolve({title: 'post2'}) 
          },1000)
  
  })
    let createdp2 = await cp2;

  const lastactivityy =  new Promise((resolve, reject)=> {
        
    setTimeout(()=>{
        var currdate = new Date();
        lastactivity  = currdate.getHours() +" "+ currdate.getMinutes() + " " + currdate.getSeconds();
        console.log("lastactivity: "+lastactivity + createdp2.title)
        resolve()
    },0)


})

posts.forEach((post) => {
    console.log(post.title)
})

  const cp3 = new Promise((resolve, reject) => {
        
        setTimeout(() => {
           posts.push({title: 'post3'})
           resolve() 
          },1000)
  
  })
    
}

lastseen()


