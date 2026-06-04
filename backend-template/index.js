import app from "./app.js";

import  mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
try{
    mongoose.connect(process.env.MONGODB_URL)
    console.log("Databse Connected Successfully")
}catch(error){
    console.error(error)
}

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is running on PORT http://localhost:${PORT}`)
})