import { createJob, getJob } from "@/controller/job.controller.js"
import express from "express"

const router = express.Router()

router.get("/:jobId", getJob)
router.post("/:companyId", createJob)

export default router