import { BriefcaseBusiness } from 'lucide-react'
import React from 'react'
import Header from './Header'
import { Button } from './ui/button'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-black'>
        <div className="w-full max-w-[90%] mx-auto p-10">
            <div className="flex gap-20">
                <div className=''>
                    <div className="flex gap-4 items-center">
                        <BriefcaseBusiness />
                        <p className="font-semibold text-[20px]">Job</p>
                    </div>
                    <p className='text-white/80 mt-5 text-[20px] font-semibold'>True growth happens when we connect. Partner with the right people, the right companies, and shape the future together</p>
                </div>

                <div className=''>
                    <Header variant='sm3' classname='font-semibold'>Company</Header>
                    <div className="flex flex-col gap-1 mt-5">
                        <Button variant="linkStyle2">About Us</Button>
                        <Button variant="linkStyle2">Our Team</Button>
                        <Button variant="linkStyle2">Partners</Button>
                        <Button variant="linkStyle2">For Candidates</Button>
                        <Button variant="linkStyle2">For Employers</Button>
                    </div>
                </div>

                <div className='w-[450px]'>
                    <Header variant='sm3' classname='font-semibold'>Job Categories</Header>
                    <div className="flex flex-col gap-1 mt-5">
                        <Button variant="linkStyle2">Telecomunications</Button>
                        <Button variant="linkStyle2">Hotels & Tourism</Button>
                        <Button variant="linkStyle2">Construction</Button>
                        <Button variant="linkStyle2">Education</Button>
                        <Button variant="linkStyle2">Financial Services</Button>
                    </div>
                </div>

                <div className=''>
                    <Header variant='sm3' classname='font-semibold'>Newsletter</Header>
                    <p className='text-white/80 mt-5'>Subscribe to our newsletter and stay informed with the latest job opportunities, career insights, and industry updates—delivered straight to your inbox</p>

                    <input type="text" className='rounded-xl p-5 border border-white/80 mt-5 w-full' placeholder='Email Address'/>

                    <Button variant={"fullWidth"} className='w-full mt-5 h-[3em]'>Subscribe Now</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer