import {createCourseService} from "../../services/courses/createcourse.service.js"

export const createCourseController = async(req,res) =>{
    try{
        const courses = await createCourseService(req.body,req.file)
        
        return res.status(201).json({
            success:true,
            data:courses,
            message:"courses created successfully"
        })


    }catch(error){
        console.error(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}