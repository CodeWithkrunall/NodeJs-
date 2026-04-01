/*const http = require('http');

//create a server object

const server = http.createServer((req,res) => {

    res.end('hello bhai');
});

server.listen(3000, ()=>{
    console.log('server running on port 3000');
});
*/
const http = require('http');

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'contect type ':'text plan'});
    res.end('hello world')
})

Server.listen(3000, ()=>{
    console.log(`this server is running in 300 poer`)
});