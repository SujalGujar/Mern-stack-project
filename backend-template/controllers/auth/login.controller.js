import { loginService } from "../../services/auth/login.service.js";

import { registerService } from "../../services/auth/login.service.js";

export const registerController = async(req,res) =>{
    try{
        const user = await registerService(req.body);

    res.status(201).json({
        succss:true,
        message:"user login successfully",
        data:user, 
    })
    }catch(error){
        console.error(error,"server error")
        res.status(400).json({
            success:false,
            message:"server error"
        })
    }
}
export const loginController = async(req,res)=>{
    try{
        

    const user =await loginService(req.body
    );
0
    res.status(200).json({
        success:true,
        message:"user successfully logged in",
        data:user
    })
    }
    catch(error){
        console.error(error)
        res.status(401).json({
            success:false,
            message:error.message

        })
    }

}