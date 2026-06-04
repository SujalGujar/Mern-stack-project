import mongooe from "mongoose";

const courseSchema = new mongooe.Schema({
    title:{
        type:String
    },
    description:{
        type:String,

    },
    thumbnail:{
        type:String
    },
    category:{
        type:String
    },
    level:{
        type:String
    },
    instructor:{
        type:mongooe.Schema.Types.ObjectId,
        ref:"register"

    }
},{timestamps:true});

const course = new mongooe.model("courses",courseSchema)

export default course;