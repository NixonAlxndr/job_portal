import { HeaderType } from '@/lib/type'
import { cn } from '@/lib/utils'
import React from 'react'

const Header = ({ classname, children, variant }: HeaderType) => {
    const classVariant = {
        xl: "text-[70px]",
        md: "text-[50px]",
        md2: "text-[40px]",
        sm: "text-[28px]",
        sm2: "text-[24px]",
        sm3: "text-[20px]"
    }

  return (
    <div className={cn(classname, classVariant[variant])}>
        {children}
    </div>
  )
}

export default Header