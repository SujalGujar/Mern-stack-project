import register from "../../models/register.model.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken"
import { UNSAFE_RouteContext } from "react-router-dom";

export const registerService = async (data) => {
        console.log("Received Data:", data);

    const { name, emailId, password ,role} = data;

    if (!name || !emailId || !password || !role) {
        throw new Error("All fields are required");
    }

    const existingUser = await register.findOne({ emailId });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await register.create({
        name,
        emailId,
        password: hashedPass,
        role
    });

    return {
        _id: newUser._id,
        name: newUser.name,
        emailId: newUser.emailId,
        role:newUser.role
    };
};

export const loginService = async (data) => {
    const { emailId, password } = data;

    if (!emailId || !password) {
        throw new Error("Email and password are required");
    }

    const user = await register.findOne({ emailId });
    const token = Jwt.sign(
        {
            id:user._id,
            emailId:user.emailId
        },
        process.env.JWT_SECRET,
        {
            expiresIn:'1d'
        }
    )
    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isPassCorrect = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPassCorrect) {
        throw new Error("Invalid email or password");
    }

    return {
        _id: user._id,
        name: user.name,
        emailId: user.emailId,
        token
    };
};