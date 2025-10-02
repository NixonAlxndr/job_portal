import Header from '@/components/Header'
import React, { Key } from 'react'
import Image from 'next/image'
import { aboutUs1, aboutUs2, aboutUs3, aboutUs4 } from '../../../public/assets'
import TitleSection from '@/components/TitleSection'
import { FAQ, newsAndBlogs, steps, workingSection } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Label from '@/components/Label'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const AboutUs = () => {
  return (
    <>
      {/* Title Section */}
      <TitleSection titleName='About Us' />

      {/* Intro */}
      <div className="w-full mt-10 max-w-[90%] mx-auto text-black text-[16px]">
        <div className='flex gap-10 items-center w-full'>
          <Header variant='md2' classname='font-semibold w-[50em]'>Where Careers and Opportunities Meet</Header>
          <p className='text-[16px]'>Behind every great career is the right opportunity. We started [Your Brand] with one vision: to connect people and companies in a way that helps both grow. For us, it’s not just about jobs—it’s about building futures, inspiring progress, and making meaningful connections that last</p>
        </div>

        <Image
          src={aboutUs1}
          alt='aboutUs1'
          className='w-full h-[30em] object-cover rounded-xl mt-10'
        />
      </div>

      {/* How it works section */}
      <div className="w-full mt-[100px] max-w-[90%] mx-auto text-black text-center">
        <Header classname='font-bold' variant='md'>How It Works</Header>
        <p className='w-[60%] justify-self-center'>Discover how our platform connects you with the right opportunities in just a few simple steps. From creating your profile to applying for jobs, we make the process seamless and efficient</p>

        <div className="flex justify-between w-full mt-20 gap-5">
          {
            steps.map((step, index) => {
              const Icon = step.Icon
              return (
                <div key={index} className="flex flex-col gap-4 items-center shadow-2xl py-2 shadow-primary/10 rounded-md">
                  <Icon color='#309689' size={40} />
                  <Header variant='sm3' classname='font-bold'>{step.title}</Header>
                  <p className='text-black/60'>{step.description}</p>
                </div>
              )
            })
          }
        </div>

        <div className='w-full rounded-xl overflow-hidden mt-[150px]'>
          <video controls className='w-full'>
            <source src="/assets/Crunch_Company_Culture.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='bg-black flex p-5 text-white justify-between'>
            {
              Array.from({ length: 3 }).map((arr, index) => (
                <div key={index as Key} className='flex gap-5 items-center'>
                  <Label className='h-10 content-center' variant={"secondary"}>{index + 1}</Label>
                  <div>
                    <Header variant='sm3' classname='font-semibold'>Create Account</Header>
                    <Button variant={"linkStyleGhost"} className='text-primary float-left'>Learn More</Button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full mt-10 max-w-[90%] mx-auto text-black text-[16px]">
        <div className='text-center'>
          <Header classname='font-bold' variant='md'>Frequently Ask Question</Header>
          <p className='w-[60%] justify-self-center'>Have questions about how our platform works, the recruitment process, or the benefits of creating an account? Our FAQ section is here to provide clarity. We’ve covered everything from setting up your profile to receiving job alerts, so you can move forward with confidence</p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {
            FAQ.map(f => (
              <AccordionItem key={f.id} value={String(f.id)} className='my-3'>
                <AccordionTrigger>
                  <div className='flex gap-5 items-center'>
                    <h1 className='font-semibold text-gray-600 text-[28px]'>{f.id}</h1>
                    {f.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">{f.answer}</AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </div>
      
      {/* Flex Section */}
      <div className="w-full py-10 mt-10 max-w-[90%] mx-auto flex justify-between text-black text-[16px]">
        <div className="bento-layout">
          <Image src={aboutUs2} alt={"aboutus2"} className='img1' />
          <Image src={aboutUs3} alt={"aboutus3"} className='img2' />
          <Image src={aboutUs4} alt={"aboutus4"} className='img3' />
        </div>

        <div className='w-[50%]'>
          <Header variant='md' classname='font-bold'>We're Only Working With The Best</Header>
          <p className='mt-3'>We partner exclusively with top companies and talented professionals to ensure every opportunity on our platform meets the highest standards. Your career deserves nothing less than the best</p>

          <div className="flex gap-10 flex-wrap justify-around mt-10">
            {
              workingSection.map(ws => {
                const Icon = ws.Icon
                return (
                  <div className='flex gap-5 items-center w-[300px]'>
                    <Icon color='#309689' size={50} />
                    <h1 className='font-semibold text-[20px]'>{ws.title}</h1>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className='w-full max-w-[90%] mx-auto text-black py-20'>
        <div className='text-center'>
          <Header variant={'xl'} classname='font-semibold'>News And Blog</Header>
          <p className='text-[16px]'>Stay updated with the latest news, career tips, and industry insights to help you make smarter decisions for your future</p>
          <div className='text-right'>
            <Button variant={"linkStyle"} fontSize={"lg"}>View All</Button>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-10 mt-2'>
          {
            newsAndBlogs.map((newAndBlog, index) => (
              <div key={index}>
                <div className="relative">
                  <Image src={newAndBlog.image} alt={newAndBlog.type} className='w-full h-[25em] object-cover rounded-xl' />
                  <Label className='absolute top-2 left-2' variant={"secondary"}>{newAndBlog.type}</Label>
                </div>

                <p className='font-semibold text-[16px] text-secondary-text mt-3'>{newAndBlog.date}</p>
                <Header variant='sm2' classname='font-bold mt-1'>{newAndBlog.title}</Header>
                <Button variant={"linkStyleGhost"} className='font-semibold mt-1 flex gap-2 items-center'>
                  Read More
                  <ArrowRight color='#309689' size={1.5} />
                </Button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default AboutUs