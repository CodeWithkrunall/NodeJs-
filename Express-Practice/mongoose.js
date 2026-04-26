import express from 'express'
import mongoose from 'mongoose'
 import dns from "dns"
import { connectDB } from './config/db.js';



const app = express();

const PORT = 3000;


dns.setServers(["1.1.1.1", "8.8.8.8"]);


await connectDB()

app.get('/', (req, res) => {
    res.send("Hello express")
})

app.post('/person', express.json(), (req,res) => {
    console.log(req.body)
    res.send("preson Added")
})

app.listen(PORT, ()=>{
    console.log(`server run on http:localhost:${PORT}`)
})