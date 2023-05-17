const http = require('http')
const server = http.createServer((req,res)=>{
    res.write('<body>Prashast</body>')
})

server.listen(4000);