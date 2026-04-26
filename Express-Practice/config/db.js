import mongoose from "mongoose"

export const connectDB = async() =>{

    const MONGODB_URL ='mongodb+srv://KrunalStack:rathod@cluster0.o1bonfu.mongodb.net/database?appName=Cluster0'
    
    await mongoose.connect(MONGODB_URL).then(()=>{
        console.log('database is connect')
    })

}