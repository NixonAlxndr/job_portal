import prisma from "@/prisma.js";
import type { Request, Response } from "express";

type CompanyType = {
    name: string,
    place: string,
    latitude: string,
    longitude: string,
    userId: string
}

type GetCompanyType = {
    userId: string
}

export const getCompany = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params as GetCompanyType

        if (!userId) {
            res.status(404).json({
                message: "User not found"
            })
        }

        const company = await prisma.company.findMany({
            where: { userId }
        })


        res.status(200).json({
            company
        })
    } catch (err) {
        res.status(500).json({
            messsage: "Internal server error"
        })
    }
}

export const createCompany = async (req: Request, res: Response) => {
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
    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const updateCompany = async (req: Request, res: Response) => {
    try {
        const { name, place, latitude, longitude} = req.body as unknown as CompanyType;
        const { userId } = req.params as GetCompanyType;

        const company = await prisma.company.update({
            where: { userId },
            data: {
                name, place, latitude, longitude
            }
        })

        res.status(200).json({
            message: "Company updated",
            company
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const deleteCompany = async (req: Request, res: Response) => {
    try {
        const { companyId } = req.params as { companyId: string }

        const company = await prisma.company.delete({
            where: { id: companyId },
        })

        res.status(200).json({
            message: "Company updated",
            company
        })
    } catch (err) {
        res.status(500).json({
            error: err,
            message: "Internal server error"
        })
    }
}