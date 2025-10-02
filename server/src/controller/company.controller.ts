import prisma from "@/prisma.js";
import type { Request, Response } from "express";

type CompanyType = {
    name: string,
    place: string,
    latitude: string,
    longitude: string,
    userId: string
}

export const createCompany = async (req : Request, res: Response) => {
    try {
        const { name, place, latitude, longitude, userId } = req.body as unknown as CompanyType;
        
        const company = await prisma.company.create({
            data: {
                name, place, latitude, longitude, userId
            }
        })

        res.status(200).json({
            message: "Company Created",
            company
        })
    }catch(err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}