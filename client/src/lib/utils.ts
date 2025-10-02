import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { avatar1, avatar2, avatar3, homepage4, homepage5 } from "../../public/assets";
import { Anvil, Award, BadgeCheck, Banknote, Briefcase, Building, Bus, Clock, FileText, FileUser, GraduationCap, HardHat, LaptopMinimalCheck, Luggage, Mail, MapPinIcon, Phone, ShoppingBag, Trees, User } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeAgo(date: Date) {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return `${diffSec} sec ago`;
  if (diffMin < 60) return `${diffMin} min ago`;
  if (diffHour < 24) return `${diffHour} hours ago`;
  return `${diffDay} days ago`;
}

export const testimonials = [
  {
    rating: 5,
    title: "Amazing services",
    name: "Marco Khin",
    content: "The platform is super easy to use and helped me land a great opportunity within days. Highly recommended!",
    image: avatar1,
  },
  {
    rating: 4,
    title: "Great experience",
    name: "Sophia Li",
    content: "I love how simple the process was. The job alerts were very accurate and matched my skills perfectly.",
    image: avatar2,
  },
  {
    rating: 5,
    title: "Highly recommended",
    name: "James Anderson",
    content: "The customer support team was very responsive and professional. I felt supported every step of the way.",
    image: avatar3,
  },
];

export const categories = [
  {
    name: "Agriculture",
    icon: Trees,
    dummyJobCount: 1254
  },
  {
    name: "Metal Production",
    icon: Anvil,
    dummyJobCount: 816
  },
  {
    name: "Commerce",
    icon: ShoppingBag,
    dummyJobCount: 2082
  },
  {
    name: "Construction",
    icon: HardHat,
    dummyJobCount: 1520
  },
  {
    name: "Hotels & Tourism",
    icon: Luggage,
    dummyJobCount: 1022
  },
  {
    name: "Education",
    icon: GraduationCap,
    dummyJobCount: 1496
  },
  {
    name: "Financial Services",
    icon: Banknote,
    dummyJobCount: 1529
  },
  {
    name: "Transport",
    icon: Bus,
    dummyJobCount: 1244
  },
]

export const introCompanies = [
  {
    name: "Clients worldwide",
    description: "Trusted by professionals and organizations around the globe, our platform connects talent with opportunities without borders",
    number: "12k+"
  },
  {
    name: "Active resume",
    description: "Thousands of active resumes from job seekers are available, making it easier for companies to find the right talent in no time",
    number: "20k+"
  },
  {
    name: "Companies",
    description: "Hundreds of companies across various industries are actively hiring, giving you the chance to find the workplace that truly fits you",
    number: "18k+"
  },
]

export const newsAndBlogs = [
  {
    type: "News",
    date: "20 March 2024",
    title: "Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024",
    image: homepage4
  },
  {
    type: "Blog",
    date: "30 March 2024",
    title: "How to avoid the top six most common job interview mistakes",
    image: homepage5
  },
]

export const steps = [
  {
    title: "Create Account",
    Icon: User,
    description: "Sign up and set up your profile in minutes to get started"
  },
  {
    title: "Upload Resume",
    Icon: FileText,
    description: "Showcase your experience and skills by uploading your resume"
  },
  {
    title: "Find Jobs",
    Icon: Briefcase,
    description: "Browse thousands of opportunities from companies across industries"
  },
  {
    title: "Apply Job",
    Icon: LaptopMinimalCheck,
    description: "Send your application with just one click and take the next step in your career"
  },
]

export const FAQ = [
  {
    "id": 1,
    "question": "Can I upload a CV?",
    "answer": "Yes, you can upload your CV directly through our platform to apply for jobs."
  },
  {
    "id": 2,
    "question": "How long does the recruitment process take place?",
    "answer": "The timeline may vary depending on the role and company, but we’ll keep you updated every step of the way."
  },
  {
    "id": 3,
    "question": "Do you recruit for graduates, apprentices, and students?",
    "answer": "Absolutely! We have opportunities tailored for graduates, apprentices, and students."
  },
  {
    "id": 4,
    "question": "What does the recruitment and selection process involve?",
    "answer": "Our process usually includes application screening, interviews, and assessments depending on the role."
  },
  {
    "id": 5,
    "question": "Can I receive notifications for any future jobs that may interest me?",
    "answer": "Yes, you can subscribe to job alerts and receive notifications about future opportunities."
  }
]

export const workingSection = [
  {
    title: "Quality Job",
    Icon: BadgeCheck
  },
  {
    title: "Resume Builder",
    Icon: FileUser
  },
  {
    title: "Top Companies",
    Icon: Building
  },
  {
    title: "Top Talent",
    Icon: Award
  },
]

export const contactUsDescription = [
  {
    Icon: Phone,
    title: "Call for inquiry",
    desc: "+257 388-6895"
  },
  {
    Icon: Mail,
    title: "Send us email",
    desc: "jobPortal@portal.com"
  },
  {
    Icon: Clock,
    title: "Opening hours",
    desc: "Mon - Fri: 10AM - 10PM"
  },
  {
    Icon: MapPinIcon,
    title: "Office",
    desc: "19 North Road Piscataway, NY 08854"
  },
]