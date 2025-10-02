import { createCompany } from "@/controller/company.controller.js"
import express from "express"

const router = express.Router()

router.post("/", createCompany)

export default router