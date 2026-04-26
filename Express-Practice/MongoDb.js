
// const express = require('express')


// const app = express();
// const PORT = 3000;

// const MONGODB_URL ="mongodb+srv://KrunalStack:krunal123@cluster0.o1bonfu.mongodb.net/?appName=Cluster0"

// mongoose.connect(MONGODB_URL).then(()=>{
//    console.log('database connected') 
// })

// app.get('/', (req, res)=>{
//     res.send('express start')
// });

// app.listen(PORT, () =>{
//     console.log(`server is running on http:/localhost:${PORT}`)
// })

import {MongoClient} from "mongodb"
// import dns from "dns"

// dns.setServers(["1.1.1.1", "8.8.8.8"]);
//mongodb atlas connection string

const url = "mongodb+srv://KrunalStack:kru123@cluster0.o1bonfu.mongodb.net/database?appName=Cluster0"

const client = new MongoClient(url);

//db name

const dbName = 'database' 

async function main(){
    try{
        //connect to atlas
        await client.connect();
        console.log("connect to mongodb")
    }catch(error){
        console.error(error);

    }
}
main();