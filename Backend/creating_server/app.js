 const fs = require('fs');
const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        const readMessage = fs.readFileSync('./message.txt','utf-8');
        res.write(`<body><p>${readMessage}</p><form action ="/message" method="POST"><input type="text" name="message"></input><button type ="submit">submit</button></form></body>`);
        res.end()
        return res.end()  
    }
if(req.url === '/message' && req.method==='POST'){
    const body = [];
    req.on('data', (splittedData)=>{
        body.push(splittedData)
    })

    req.on('end', ()=>{
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('./message.txt', message);
    })
    
    res.statusCode = 302;
    res.setHeader('location','/');
    return res.end();
}
    res.write('<body>Default response</body>');
    res.end();
    
})

server.listen(4000);