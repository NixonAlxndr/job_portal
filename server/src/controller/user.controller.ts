import prisma from "@/prisma.js"
import type { Request, Response } from "express";

type SignUpType = {
    email: string,
    name: string,
    password: string
}

type SignInType = {
    email: string,
    password: string
}

export const signUp = async (req: Request, res: Response) => {
    try {
        const { email, name, password } = req.body as SignUpType;
        await prisma.user.create({
            data: {
                email, name, password
            }
        });
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body as SignInType

    try {
        const user = await prisma.user.findFirst({
            where: { email , password }
        })

        if(!user) {
            return res.status(404).send({ message: "User not found"})
        }

        res.status(200).json({
            data: user
        })
    }catch(err) {
        res.status(500).json({ error: "Internal server error" });
    }
}