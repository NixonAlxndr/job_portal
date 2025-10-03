import { createCompany, deleteCompany, getCompany, updateCompany } from "@/controller/company.controller.js"
import express from "express"

const router = express.Router()

router.post("/", createCompany)
router.get("/:userId", getCompany)
router.patch("/:userId", updateCompany)
router.delete("/:companyId", deleteCompany)

export default router