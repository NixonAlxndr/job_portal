import prisma from "@/prisma.js"
import type { Request, Response } from "express"

export const getHome = async (req: Request, res: Response) => {
    try {
        const recentJobs = await prisma.jobs.findMany({
            take: 5,
            orderBy: [
                {
                    jobPosted: "asc"
                }
            ],
            select: {
                jobTitle: true,
                jobType: true,
                jobPosted: true,
                salary: true,
                jobCategory: {
                    select: { name: true }
                },
                company: {
                    select: { name: true }
                }
            },
        })

        const jobCountByCategory = await prisma.jobs.groupBy({
            by: ["jobCategoryId"],
            where: {
                jobCategoryId: { in: [6, 7, 1, 8, 3, 4, 5, 9] },
            },
            _count: {
                jobCategoryId: true,
            },
        })


        res.status(200).json({
            recentJobs,
            jobCountByCategory
        })
    } catch (err) {
        res.status(500).json({
            error: err,
            message: "Internal server error"
        })
    }
}