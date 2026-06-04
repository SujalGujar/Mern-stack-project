// import course  from "../../models/course.model.js"
// import { uploadOnCloudinary } from "../../utility/cloudinary.js";


// const createCourseService = async(data) =>{
//     const{title,description,thumbnail,category,level,instructor} =data;
    
//     let thumbnailFile =""
    
//     if(file){
//         const result = await uploadOnCloudinary(thumbnail)
//     }
//     if(!title||!description||!thumbnail||!category||!level||){
//         throw new error("All fields Required");
//     }

//     const instructorId = await register.findById({instructorId})

//     const newCourse = await course.create({
//         title,
//         description,thumbnail:thumbnailFile,category,level,instructor:intructorId
//     })
//     return newCourse;
// }

import Course from "../../models/course.model.js";
import register from "../../models/register.model.js";
import { uploadOnCloudinary } from "../../utility/cloudinary.js";

export const createCourseService = async (data, file) => {
  const { title, description, category, level, instructor } = data;

  if (!title || !description || !category || !level || !instructor) {
    throw new Error("All fields are required");
  }

  let thumbnailFile = "";

  if (file) {
    const result = await uploadOnCloudinary(file.path);
    thumbnailFile = result.secure_url;
  } else {
    throw new Error("Thumbnail is required");
  }

  const instructorData = await register.findById(instructor);

  if (!instructorData) {
    throw new Error("Instructor not found");
  }

  const newCourse = await Course.create({
    title,
    description,
    thumbnail: thumbnailFile,
    category,
    level,
    instructor: instructorData._id,
  });

  return newCourse;
};