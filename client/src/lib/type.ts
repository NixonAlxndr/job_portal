import { HTMLAttributes, ReactNode } from "react"

export interface SponsorCarouselType {
    name: string,
    logo: string
}

export interface CarouselType {
    classname?: string
}

export interface HeaderType {
    classname?: string,
    variant: "xl" | "md" | "sm" | "sm2" | "sm3" | "md2",
    children: ReactNode
}

export interface JobCategoryType {
    category: "Commerce" | "Telecomications" | "Hotels & Tourism" | "Education" | "Financial Services"
}