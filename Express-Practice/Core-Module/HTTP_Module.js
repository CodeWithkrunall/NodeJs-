const http = require('http');

//create a server object

const server = http.createServer((req,res) => {

    res.end('hello bhai');
});

server.listen(3000, ()=>{
    console.log('server running on port 3000');
});