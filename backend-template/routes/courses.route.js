import express from "express"

const router = express.Router()

import { createCourseController } from "../controllers/courses/courses.controller.js";

router.post("/createCourse",createCourseController);

export default router;