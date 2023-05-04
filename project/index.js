var lastactivity = "";
const posts = [
    {
        title: 'Post1'
    },
]
function createpost2(){
    
    return new Promise((resolve, reject) => {
        
          setTimeout(() => {
             posts.push({title: 'post2'})
             resolve() 
            },1000)
    
    })

}

function createpost3(){
    
    return new Promise((resolve, reject) => {
        
          setTimeout(() => {
             posts.push({title: 'post3'})
             resolve() 
            },1000)
    
    })

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

function updateLastUserActivityTime(){
    return new Promise((resolve, reject)=> {
        
        setTimeout(()=>{
            var currdate = new Date();
            lastactivity  = currdate.getHours() +" "+ currdate.getMinutes() + " " + currdate.getSeconds();
            console.log("lastactivity: "+lastactivity)
            resolve()
        },0)


    })
}

createpost2().then(updateLastUserActivityTime).then(printPost).then(createpost3).then(updateLastUserActivityTime).then(printPost)


