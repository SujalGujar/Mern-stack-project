import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    emailId:{
        type:String,
        unique:true,
        trim:true,
        lowercase:true,
       
    },
    password:{
        type:String,
        minlength:[4,'Password must be atleast 4 digits long'],
        required:true
    },
    role:{
        type:String,
        enum:["Admin","user","instructor"]
    }

}, { timestamps: true })

const register = mongoose.model("registerUser",registerSchema)
export default register;
