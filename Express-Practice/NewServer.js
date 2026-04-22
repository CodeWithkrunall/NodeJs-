const express = require('express');
const app = express();

const port = 3000;
// router
app.get('/', (req,res)=>{
    res.send('this is server portal')
});

// params
app.get('/user/:username', (req, res)=>{
    const username = req.params.username
    res.send(`welcome ${Krunal}`);
});

//query   // search?keyword=express
app.get('/search',(req,res)=>{
    const keyword = req.query.keyword
    res.send(`searching ${keyword}`)
});

app.listen(port , () =>{
    console.log(` this server run on ${port}`)
});