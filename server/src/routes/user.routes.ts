import { signIn, signUp } from "@/controller/user.controller.js"
import express from "express"

const router = express.Router()

router.post("/signIn", signIn)
router.post("/signUp", signUp)

export default router