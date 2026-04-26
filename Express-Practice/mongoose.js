import express from 'express'
import mongoose from 'mongoose'
 import dns from "dns"


const app = express();

const PORT = 3000;

const MONGODB_URL ='mongodb+srv://KrunalStack:rathod@cluster0.o1bonfu.mongodb.net/database?appName=Cluster0'


dns.setServers(["1.1.1.1", "8.8.8.8"]);

await mongoose.connect(MONGODB_URL).then(()=>{
    console.log('database is connect')
})

app.get('/', (req, res) => {
    res.send("Hello express")
})

app.listen(PORT, ()=>{
    console.log(`server run on http:localhost:${PORT}`)
})