const express = require('express')

const app = express();

const PORT = 3000;

const MONGODB_URL ='mongodb+srv://KrunalStack:<db_password>@krunal.pnwwzw7.mongodb.net/?appName=krunal'

app.get('/', (req, res)=>{
    res.send('express start')
});

app.listen(PORT, () =>{
    console.log(`server is running on http:/localhost:${PORT}`)
})