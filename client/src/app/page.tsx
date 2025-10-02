"use client"

import Image from 'next/image'
import React, { Key, useEffect, useRef, useState } from 'react'
import { adobe, asana, dummyLogo, homepage1, homepage2, jobGroup, linear, quotes, slack, spotify, star } from '../../public/assets'
import { CarouselType, SponsorCarouselType } from '@/lib/type'
import { categories, cn, introCompanies, newsAndBlogs, testimonials, timeAgo } from '@/lib/utils'
import Header from '@/components/Header'
import { ArrowRight, Briefcase, BriefcaseBusiness, Building, ChevronDown, Clock, MapPin, Search, Users, Wallet } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Label from '@/components/Label'

const Carousel = ({ classname }: CarouselType) => {
  const sponsors: SponsorCarouselType[] = [
    {
      name: "",
      logo: spotify
    },
    {
      name: "",
      logo: slack
    },
    {
      name: "",
      logo: adobe
    },
    {
      name: "",
      logo: asana
    },
    {
      name: "",
      logo: linear
    }
  ]

  return (
    <div className={cn(classname, 'flex bg-black gap-50 overflow-hidden')}>
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

const Home = () => {

  const jobFlexs = [
    {
      number: "25,850",
      name: "Jobs",
      icon: <BriefcaseBusiness size={30} />
    },
    {
      number: "10,850",
      name: "Candidates",
      icon: <Users size={30} />
    },
    {
      number: "18,400",
      name: "Companies",
      icon: <Building size={30} />
    }
  ]

  const dummyJob = [
    {
      logo: dummyLogo,
      postTime: "2025-09-28T12:15:00Z",
      jobDesk: "Forward Security Director",
      companyName: "Bauch, Schuppe and Schulist Co",
      jobType: "Hotels & Tourism",
      jobLocation: "New-York, USA",
      salary: "$4000-$42000",
      timeType: "Full time"
    },
    {
      logo: dummyLogo,
      postTime: "2025-09-28T11:50:00Z",
      jobDesk: "Software Engineer",
      companyName: "TechNova Solutions",
      jobType: "Information Technology",
      jobLocation: "San Francisco, USA",
      salary: "$6000-$8500",
      timeType: "Full time"
    },
    {
      logo: dummyLogo,
      postTime: "2025-09-28T10:30:00Z",
      jobDesk: "Marketing Specialist",
      companyName: "BrightWay Global",
      jobType: "Marketing & Advertising",
      jobLocation: "London, UK",
      salary: "$3500-$5000",
      timeType: "Part time"
    },
    {
      logo: dummyLogo,
      postTime: "2025-09-27T16:00:00Z",
      jobDesk: "Data Analyst",
      companyName: "Insight Analytics Inc",
      jobType: "Data & Research",
      jobLocation: "Toronto, Canada",
      salary: "$4500-$6500",
      timeType: "Contract"
    },
    {
      logo: dummyLogo,
      postTime: "2025-09-26T09:20:00Z",
      jobDesk: "UX/UI Designer",
      companyName: "Creative Minds Studio",
      jobType: "Design & Creative",
      jobLocation: "Berlin, Germany",
      salary: "$4000-$6000",
      timeType: "Full time"
    }
  ]

  const [categoryOpen, setCategoryOpen] = useState<boolean>(false)
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setCategoryOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className='w-full min-h-screen relative'>
        <div className='w-full h-screen'>
          {/* Overlay */}
          <div className='bg-black/80 absolute inset-0 w-full h-screen'>
            <div className='absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-10'>
              <Header variant="xl">
                <h1 className='font-bold text-7xl '>Find Your Job Today!</h1>
                <p className='text-[18px] text-white/60 text-center'>Connecting Talent with Opportunity: Your Gateway to Career Success</p>
              </Header>

              <div className='w-full flex bg-white rounded-[16px] items-center justify-between'>
                {/* Text Input */}
                <input
                  className='outline-none border-none text-black/80 pl-3'
                  placeholder='Job Title or Company'
                  type="text"
                />

                {/* Select Location */}
                <div className="relative">
                  <div className='text-black/40 flex gap-4'>
                    <p>Select Location</p>
                    <ChevronDown />
                  </div>
                </div>

                {/* Select Category */}
                <div
                  ref={categoryRef}
                  className="relative"
                >
                  <div
                    onClick={() => setCategoryOpen(p => !p)}
                    className='text-black/40 flex gap-4 items-center'
                  >
                    <p>Select Category</p>
                    <ChevronDown />
                  </div>

                  {
                    categoryOpen &&
                    <div
                      className="absolute bottom-0 w-full translate-y-full bg-white text-black/40"
                    >
                      <div className='py-3 px-2 cursor-pointer hover:bg-black/5'>
                        <p>Commerce</p>
                      </div>
                      <div className='py-3 px-2 cursor-pointer hover:bg-black/5'>
                        <p>Telecomunications</p>
                      </div>
                      <div className='py-3 px-2 cursor-pointer hover:bg-black/5'>
                        <p>Hotels & Tourism</p>
                      </div>
                      <div className='py-3 px-2 cursor-pointer hover:bg-black/5'>
                        <p>Education</p>
                      </div>
                      <div className='py-3 px-2 cursor-pointer hover:bg-black/5'>
                        <p>Financial Services</p>
                      </div>
                    </div>
                  }
                </div>

                <Button className='flex h-[5em] rounded-r-[16px] rounded-l-none' variant={"fullWidth"}>
                  <Search
                    size={30}
                  />
                  <p className='text-[18px]'>Search Job</p>
                </Button>
              </div>

              <div className='flex justify-around '>
                {
                  jobFlexs.map(({ number, name, icon }) => (
                    <div
                      key={name}
                      className="flex items-center gap-5"
                    >
                      <div className='bg-primary p-4.5 rounded-full'>
                        {icon}
                      </div>

                      <div>
                        <p className='text-xl font-bold'>{number}</p>
                        <p className='text-[16px] text-white/60'>{name}</p>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>
          </div>

          <Image
            src={homepage1}
            alt='homepage'
            className='w-full h-screen object-cover'
          />
        </div>

        <Carousel classname='absolute bottom-0 inset-x-0 z-10' />
      </div>

      {/* Recent Job Section */}
      <div className='w-full max-w-[90%] mx-auto text-black'>
        <div>
          <Header
            variant='md'
            classname='font-bold'
          >
            Recent Jobs Available
          </Header>
          <p className='text-[16px]'>Discover the latest opportunities tailored for your career growth. Explore our list of recent job openings and take the next step toward your future.</p>
          <Button
            variant={"linkStyle"}
            fontSize={"lg"}
            className='float-right mt-5'
          >
            View All
          </Button>
        </div>

        <div className='mt-10'>
          {
            dummyJob.map(job => (
              <div
                className='mt-20'
                key={job.jobDesk}
              >
                <Label>
                  {timeAgo(new Date(job.postTime))}
                </Label>

                <div className="flex mt-5 gap-10">
                  <Image src={job.logo} alt={job.companyName} />

                  <div>
                    <Header variant='sm'>{job.jobDesk}</Header>
                    <p className='text-[16px]'>{job.companyName}</p>
                  </div>
                </div>

                <div className='flex mt-4 justify-between items-center'>
                  <div className="flex gap-10">
                    <div className='flex gap-3'>
                      <Briefcase color={'#309689'} />
                      <p className='text-[16px]'>{job.jobType}</p>
                    </div>
                    <div className='flex gap-3'>
                      <Clock color={'#309689'} />
                      <p className='text-[16px]'>{job.timeType}</p>
                    </div>
                    <div className='flex gap-3'>
                      <Wallet color={'#309689'} />
                      <p className='text-[16px]'>{job.salary}</p>
                    </div>
                    <div className='flex gap-3'>
                      <MapPin color={'#309689'} />
                      <p className='text-[16px]'>{job.jobLocation}</p>
                    </div>
                  </div>

                  <Button variant={"primary"} className='text-white'>Job Details</Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Category Section */}
      <div className='mt-10 bg-primary/10 text-black '>
        <div className="w-full max-w-[90%] mx-auto py-20">
          <div className='text-center'>
            <Header variant='md' classname='font-semibold'>
              Browse by Category
            </Header>

            <p className='text-[16px]'>Browse jobs by industry, role, or skill to discover your perfect career match</p>
          </div>

          <div className='grid grid-cols-[repeat(4,1fr)] gap-10 mt-20'>
            {
              categories.map(category => {
                const Icon = category.icon
                return (
                  <div key={category.name} className='bg-white rounded-md p-10 flex flex-col gap-8 items-center'>
                    <Icon color='#309689' size={40} />
                    <Header variant='sm2' classname='font-bold'>{category.name}</Header>
                    <Label variant={"default"}>{category.dummyJobCount} jobs</Label>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className='w-full max-w-[90%] mx-auto text-black mt-10 py-10'>
        <div className="flex justify-between gap-10">
          <Image
            src={homepage2}
            alt='homepage-2'
            className='rounded-xl'
          />

          <div>
            <Header variant='md' classname='font-bold'>
              Good Life Begin With A Good Company
            </Header>

            <p className='text-[16px] mt-10'>We believe a great career starts with the right environment. Our platform connects you with companies that offer the vision, culture, and opportunities to help you grow and build a better life.</p>

            <div className="flex gap-3 items-center mt-10">
              <Button
                variant={"primary"}
                className='text-white'
              >
                Search Job
              </Button>

              <Button
                variant={"linkStyle"}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20 flex gap-10 justify-between">
          {
            introCompanies.map((introCompany, index) => (
              <div key={index} className='flex flex-col gap-2'>
                <Header variant='md' classname='text-primary font-bold'>{introCompany.number}</Header>
                <Header variant='sm2' classname='font-semibold'>{introCompany.name}</Header>
                <p className='text-[16px] text-black/80'>{introCompany.description}</p>
              </div>
            ))
          }
        </div>

        <div className='mt-10'>
          <div className="w-full bg-black rounded-xl px-10 py-6 flex flex-col-reverse sm:flex-row justify-between">
            <div className='text-white'>
              <Header variant='md' classname='font-bold'>
                Create A Better <br /> Future For Yourself
              </Header>
              <p className="text-[16px] mt-3">Your future starts with the choices you make today. Discover the right opportunities, connect with the right companies, and take the next step toward a successful career</p>
              <Button variant={"primary"} className='mt-3'>
                Search Job
              </Button>
            </div>

            <Image src={jobGroup} alt='jobGroup' sizes='1' />
          </div>
        </div>
      </div>

      {/* Testimoni Section */}
      <div className='mt-10 bg-primary/10 text-black py-10'>
        <div className="w-full max-w-[90%] mx-auto py-20">
          <div className='text-center'>
            <Header variant='md' classname='font-semibold'>
              Testimonial from Our Customers
            </Header>

            <p className='text-[16px]'>Hear what our valued customers have to say about their experiences with us. Their stories reflect the trust and satisfaction we strive to deliver every day</p>
          </div>

          <div className="flex gap-5 mt-20">
            {
              testimonials.map(testimoni => (
                <div className='bg-white rounded-md p-10' key={testimoni.title}>
                  <div className="flex gap-3">
                    {Array.from({ length: testimoni.rating }, (x) => (
                      <Image src={star} alt='star' key={x as Key} />
                    ))}
                  </div>

                  <Header variant='sm2' classname='mt-5 font-semibold'>{testimoni.title}</Header>

                  <p className='text-[16px] mt-5 italic'>{testimoni.content}</p>

                  <div className='w-14 h-14 justify-self-end mt-5gv'>
                    <Image src={quotes} alt="" className='w-full h-full' />
                  </div>

                  <div className="flex gap-3">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <Image src={testimoni.image} alt="avatar" className='w-full h-full object-cover' />
                    </div>

                    <div className='text-[16px]'>
                      <p className='font-semibold'>{testimoni.name}</p>
                      <p className='text-black/60'>Happy Client</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

      </div>

      {/* News Section */}
      <div className='w-full max-w-[90%] mx-auto text-black py-20'>
        <div>
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
                  <Image src={newAndBlog.image} alt={newAndBlog.type} className='w-full h-[25em] object-cover rounded-xl'/>
                  <Label className='absolute top-2 left-2' variant={"secondary"}>{newAndBlog.type}</Label>
                </div>

                <p className='font-semibold text-[16px] text-secondary-text mt-3'>{newAndBlog.date}</p>
                <Header variant='sm2' classname='font-bold mt-1'>{newAndBlog.title}</Header>
                <Button variant={"linkStyleGhost"} className='font-semibold mt-1 flex gap-2 items-center'>
                  Read More
                  <ArrowRight color='#309689' size={1.5}/>
                </Button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home