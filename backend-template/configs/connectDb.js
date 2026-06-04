import mongoose from "mongoose";

export const connectDb = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongodb connected successfully")
    }
    catch(error){
        console.log("mongodb connection error",error)
        process.exit(1);
    }
}