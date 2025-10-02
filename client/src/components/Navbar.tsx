"use client"

import React from 'react'
import { BriefcaseBusiness } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname()
    const page = pathName.split("/")[1]

  return (
    <div className=' bg-black absolute top-0 inset-x-0 z-10'>
        <div className='py-5 px-3 flex justify-between items-center max-w-[90%] mx-auto'>
            <div className="flex gap-3">
                <BriefcaseBusiness />
                <p>Job Portal</p>
            </div>

            <div className="flex gap-10">
                <Link href={"/"} className={page === "" ? "text-white" : "text-white/80"}>Home</Link>
                <Link href={"/"} className={page === "" ? "text-white" : "text-white/80"}>Jobs</Link>
                <Link href={"/aboutUs"} className={page === "aboutUs" ? "text-white" : "text-white/80"}>About Us</Link>
                <Link href={"/contactUs"} className={page === "contactUs" ? "text-white" : "text-white/80"}>Contact Us</Link>
            </div>

            <div className='flex gap-3'>
                <Button 
                    variant={"transparent"}
                >
                    Login
                </Button>

                <Button>
                    Register
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar