import { getHome } from "@/controller/home.controller.js"
import express from "express"

const router = express.Router()

router.get("/", getHome)

export default router