
const express= require('express')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT =3000

app.get('/', (req,res)=>{
    res.send('express ')
})

app.post('/form', (req,res) =>{
    console.log(req.body)
    res.send('Form Received')
})

app.listen(PORT, ()=>{
    console.log(`server is running on http:/localhost:${PORT}`)
})