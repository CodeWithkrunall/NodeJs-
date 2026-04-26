import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
})
export const person = mongoose.model("person",personSchema)