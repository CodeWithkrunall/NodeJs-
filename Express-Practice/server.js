const express = require('express');
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


app.listen(3000, () =>{
    console.log('server running on port 3000 ')
});

