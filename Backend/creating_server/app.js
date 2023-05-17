 
const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/home'){
        res.write('<body>Welcome Home</body>');
        res.end()
        return res.end()  
    }

    if(req.url==='/about'){
        res.write('<body>Welcome to about us page</body>');
        return res.end()  
    }

    if(req.url==='/node'){
        res.write('<body>Welcome to my Node Js project</body>')
        return res.end()  
    }
   
    res.write('<body>Default response</body>');
    res.end();
    
})

server.listen(4000);