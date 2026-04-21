const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req,res)=>{
    res.send('this is server portal')
});
app.listen(port , () =>{
    console.log(` this server run on ${port}`)

});