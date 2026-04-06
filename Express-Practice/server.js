/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello bhai express chal gya')
});
app.get('/about',(req, res) =>{
    res.send('this is about page')
});

app.post('/user', (req ,res) => {
    res.send('this is post user')
});

app.put('/user', (req, res) =>{
    res.send('this is put')
});

app.delete('/delete',(req, res) =>{
res.send('this is delete')
});

app.get('/contact', (req, res) =>{
    res.send("this is contant")
});

app.get('/login', (req, res) => {
    res.send('this is login page')
});

app.get('/product', (req,res) =>{
    res.send('this is product page')
});


app.listen(3000, () =>{
    console.log('server running on port 3000 ')
});

*/

/*const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req,res) => {
    res.send("this is a ger");

});

//on the server

app.listen(port , () => {
    console.log(`this is a server${port}`);
});*/

/*const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send('this is a routes')
});

app.listen(3000, () =>{
    console.log('this is a port 300;');
})*/

const express = express('express')
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extends : true }));

app.get('/',(req,res) =>{
    send.res('this is json fotmate file')

});

app.listener(port =>{
   console.log(`this server ${port} is working on 300`)
});



  




