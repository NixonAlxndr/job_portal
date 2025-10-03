import { createJob, deleteJob, getJob, updateJob } from "@/controller/job.controller.js"
import express from "express"

const router = express.Router()

router.get("/:jobId", getJob)
router.post("/:companyId", createJob)
router.patch("/:jobId", updateJob)
router.delete("/:jobId", deleteJob)

export default router