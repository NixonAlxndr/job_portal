import Header from '@/components/Header'
import MapSection from '@/components/Map'
import TitleSection from '@/components/TitleSection'
import { Button } from '@/components/ui/button'
import { CarouselType, SponsorCarouselType } from '@/lib/type'
import { cn, contactUsDescription } from '@/lib/utils'
import React from 'react'
import { asana_1, dribble_1, tinder_1, zoom_1 } from '../../../public/assets'
import Image from 'next/image'

const Carousel = ({ classname }: CarouselType) => {
    const sponsors: SponsorCarouselType[] = [
        {
            name: "",
            logo: zoom_1
        },
        {
            name: "",
            logo: tinder_1
        },
        {
            name: "",
            logo: dribble_1
        },
        {
            name: "",
            logo: asana_1
        }
    ]

    return (
        <div className={cn(classname, 'flex mt-20 gap-50 overflow-hidden')}>
            <div className='flex gap-50 shrink-0 carousel-animation'>
                {
                    sponsors.map((sponsor, index) => (
                        <Image
                            key={index}
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className='h-20'
                        />
                    ))
                }
            </div>
            <div className='flex gap-50 shrink-0 carousel-animation'>
                {
                    sponsors.map((sponsor, index) => (
                        <Image
                            key={index}
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className='h-20'
                        />
                    ))
                }
            </div>
            <div className='flex gap-50 shrink-0 carousel-animation'>
                {
                    sponsors.map((sponsor, index) => (
                        <Image
                            key={index}
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className='h-20'
                        />
                    ))
                }
            </div>
        </div>
    )

}

const ContactUs = () => {
    return (
        <>
            {/* Title Section */}
            <TitleSection titleName='Contact Us' />

            {/* Intro Section */}
            <div className="flex text-black text-[16px] gap-10 w-full max-w-[90%] mx-auto mt-20">
                <div>
                    <Header variant='md' classname='font-bold'>You Will Grow, You Will Succeed.<br /> We Promise That</Header>
                    <p>From the moment you join us, our promise is simple: to help you grow in your career and succeed in every opportunity you pursue. Because your future deserves nothing less.</p>

                    <div className='mt-10 grid grid-cols-2 gap-5 flex-wrap'>
                        {
                            contactUsDescription.map(contact => {
                                const Icon = contact.Icon
                                return (
                                    <div key={contact.title} className='flex flex-col gap-2'>
                                        <Icon color='#309689' size={30} />
                                        <h1 className='text-[24px] font-bold text-nowrap'>{contact.title}</h1>
                                        <p className='font-medium text-[20px] text-nowrap'>{contact.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='bg-primary/10 rounded-md p-5 w-3xl'>
                    <div className="text-center">
                        <Header variant='sm' classname='font-bold'>Contact Info</Header>
                        <p className='text-[16px]'>We just need a few details to make sure employers can connect with you easily</p>
                    </div>

                    <div>
                        <div className="flex justify-between mt-3">
                            <div>
                                <label htmlFor="firstName" className='font-semibold'>First Name</label>
                                <input type="text" className='p-2 border-0 outline-0 bg-white rounded-md' placeholder='Your Name' />
                            </div>

                            <div>
                                <label htmlFor="firstName" className='font-semibold'>Last Name</label>
                                <input type="text" className='p-2 border-0 outline-0 bg-white rounded-md' placeholder='Your Last Name' />
                            </div>
                        </div>

                        <div className='w-full flex flex-col mt-3'>
                            <label htmlFor="firstName" className='font-semibold'>Email Address</label>
                            <input type="text" className='p-2 border-0 outline-0 bg-white rounded-md' placeholder='Your Email Address' />
                        </div>

                        <div className='w-full flex flex-col mt-3'>
                            <label htmlFor="firstName" className='font-semibold'>Message</label>
                            <textarea className=' h-40 resize-none p-2 border-0 outline-0 bg-white rounded-md' placeholder='Your Message' />
                        </div>

                        <Button variant={"fullWidth"} className='text-white mt-3'>Send Message</Button>
                    </div>
                </div>
            </div>

            {/* Map Sextion */}
            <div className="relative w-full h-[400px] max-w-[90%] mx-auto rounded-xl overflow-hidden">
                <MapSection />
            </div>

            {/* Sponsor Section */}
            <div>
                <Carousel classname=''/>
            </div>
        </>
    )
}

export default ContactUs