import prisma from "@/prisma.js"
import type { Request, Response } from "express"

type CreateJobType = {
    companyId: string,
    jobTitle: string,
    jobDescription: string,
    jobType: string,
    experience: number,
    degree: string,
    salary: string,
    responsibilites: string[],
    skills: string[],
    jobTagsId: number[],
    jobCategoryId: number,
    jobPosted: Date
}

export const createJob = async (req: Request, res: Response) => {
    try {
        const { companyId } = req.params as unknown as CreateJobType
        const {
            jobTitle,
            jobDescription,
            jobType,
            experience,
            degree,
            salary,
            responsibilites,
            skills,
            jobPosted,
            jobTagsId,
            jobCategoryId
        } = req.body as CreateJobType

        const jobs = await prisma.jobs.create({
            data: {
                jobTitle,
                jobDescription,
                jobType,
                experience,
                degree,
                salary,
                companyId,
                jobPosted: new Date(),
                jobCategoryId,
                jobTags: {
                    connect: jobTagsId.map((id: number) => ({ id }))
                },
                responsibilites,
                skills
            }
        })

        res.status(201).json({
            message: "Jobs created",
            jobs
        })

    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({
                error: err.message,
                message: "Internal server error"
            })
        } else {
            res.status(500).json({
                error: String(err),
                message: "Internal server error"
            })
        }
    }
}

export const getJob = async (req: Request, res: Response) => {
    try {
        const { jobId } = req.params as { jobId : string }

        const job = await prisma.jobs.findFirst({
            where: { id: jobId },
            include: {
                jobCategory: {
                    select: { name: true}
                },
                company: {
                    select: {
                        name: true,
                        place: true,
                        latitude: true,
                        longitude: true,
                        user: {
                            select: {
                                name: true,
                                email: true
                            }
                        }
                    }
                }
            }
        })

        res.status(200).json({
            job
        })
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({
                error: err.message,
                message: "Internal server error"
            })
        } else {
            res.status(500).json({
                error: String(err),
                message: "Internal server error"
            })
        }
    }
}

export const updateJob = async (req: Request, res: Response) => {
    try {
        const { jobId } = req.params as { jobId : string }
        const {
            jobTitle,
            jobDescription,
            jobType,
            experience,
            degree,
            salary,
            responsibilites,
            skills,
            jobTagsId,
            jobCategoryId
        } = req.body as CreateJobType

        const job = await prisma.jobs.update({
            where: { id: jobId },
            data: {
                jobTitle,
                jobDescription,
                jobType,
                experience,
                degree,
                salary,
                jobCategoryId,
                jobTags: {
                    connect: jobTagsId.map((id: number) => ({ id }))
                },
                responsibilites,
                skills
            }
        })

        res.status(200).json({
            message: "Job updated",
            job
        })
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({
                error: err.message,
                message: "Internal server error"
            })
        } else {
            res.status(500).json({
                error: String(err),
                message: "Internal server error"
            })
        }
    }
}

export const deleteJob = async (req: Request, res: Response) => {
    try {
        const { jobId } = req.params as { jobId: string }

        await prisma.jobs.delete({
            where: { id: jobId }
        })

        res.status(200).json({
            message: "Job Deleted"
        })
        
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({
                error: err.message,
                message: "Internal server error"
            })
        } else {
            res.status(500).json({
                error: String(err),
                message: "Internal server error"
            })
        }
    }
}