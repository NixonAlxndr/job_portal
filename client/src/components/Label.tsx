import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const labelVariants = cva(
    "text-[16px] text-primary",
    {
        variants: {
            variant: {
                default: "bg-primary/10 rounded-md w-max-content py-1 px-3",
                secondary: "bg-primary text-white rounded-md w-max-content py-1 px-3"
            },
            size: {
                default: "scale-100",
                md: "scale-150",
                lg: "scale-[200]"
            }
        },
        defaultVariants: {
            variant: "default",
            // size: "default"
        }
    }
)

const Label = ({ className, variant, size, children, ...props}: React.ComponentProps<"label"> & VariantProps<typeof labelVariants>) => {
    return (
        <label className={cn(labelVariants({ variant, size, className}))}>
            {children}
        </label>
    )
}

export default Label