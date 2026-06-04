import {v2 as cloudinary} from "cloudinary";
import fs from 'fs'
import { resourceUsage } from "process";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
}); 

export const uploadOnCloudinary = async(localFilePath) =>{
    try{
        if(!localFilePath){
            console.log("First add the file")
        }

        const res= await cloudinary.uploader.upload(localFilePath,({
            resoure_type:"auto",
            public_id:"my_custom_filename"
        }))

        console.log("file successfully upload on server",res.url)
        return res;
    }
    catch(error){
        fs.unlink(localFilePath);

        return null

    }
}
