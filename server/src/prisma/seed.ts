import prisma from "@/prisma.js"
import { Role } from "@/generated/prisma/index.js"
import { connect } from "http2"

async function main() {
  console.log("🌱 Start seeding...")

  // --- Users & Companies ---
  // const companies = await prisma.user.createMany({
  //   data: [
  //     {
  //       email: "techcorp@example.com",
  //       password: "hashedpassword123",
  //       name: "TechCorp Owner",
  //       role: Role.COMPANY,
  //     },
  //     {
  //       email: "designhub@example.com",
  //       password: "hashedpassword456",
  //       name: "DesignHub Owner",
  //       role: Role.COMPANY,
  //     },
  //     {
  //       email: "marketly@example.com",
  //       password: "hashedpassword789",
  //       name: "Marketly Owner",
  //       role: Role.COMPANY,
  //     }
  //   ]
  // })

  // const allUsers = await prisma.user.findMany({ where: { role: Role.COMPANY } })

  const company1 = await prisma.company.create({
    data: {
      name: "TechCorp",
      place: "Jakarta",
      latitude: "-6.200000",
      longitude: "106.816666",
      userId: "10d19ad9-baa5-466f-b71a-ec2569fc0c38",
    }
  })

  const company2 = await prisma.company.create({
    data: {
      name: "DesignHub",
      place: "Bandung",
      latitude: "-6.914744",
      longitude: "107.609810",
      userId: "61ae1ad9-9066-43cc-94bd-470a361f48dd",
    }
  })

  const company3 = await prisma.company.create({
    data: {
      name: "Marketly",
      place: "Surabaya",
      latitude: "-7.250445",
      longitude: "112.768845",
      userId: "a669ce1b-0650-4ace-a1f9-68cd7728c9e9",
    }
  })

  // // --- Jobs untuk TechCorp ---
  // await prisma.jobs.createMany({
  //   data: [
  //     {
  //       jobTitle: "Frontend Developer",
  //       jobDescription: "Work on building responsive web applications.",
  //       jobType: "Full-time",
  //       experience: 2,
  //       degree: "Bachelor’s Degree in Computer Science",
  //       salary: "8000000",
  //       responsibilites: ["Develop UI components", "Collaborate with backend"],
  //       skills: ["React.js", "TypeScript", "TailwindCSS"],
  //       companyId: company1.id,
  //       jobCategoryId: 1
  //     },
  //     {
  //       jobTitle: "Backend Developer",
  //       jobDescription: "Implement scalable APIs and databases.",
  //       jobType: "Full-time",
  //       experience: 3,
  //       degree: "Bachelor’s Degree in Computer Engineering",
  //       salary: "10000000",
  //       responsibilites: ["Build REST APIs", "Database design"],
  //       skills: ["Node.js", "Prisma", "PostgreSQL"],
  //       companyId: company1.id,
  //       jobCategoryId: 2
  //     }
  //   ]
  // })

  // // --- Jobs untuk DesignHub ---
  // await prisma.jobs.createMany({
  //   data: [
  //     {
  //       jobTitle: "UI/UX Designer",
  //       jobDescription: "Create user-centered designs and prototypes.",
  //       jobType: "Contract",
  //       experience: 1,
  //       degree: "Bachelor’s Degree in Design",
  //       salary: "6000000",
  //       responsibilites: ["Design wireframes", "Conduct user testing"],
  //       skills: ["Figma", "Adobe XD", "User Research"],
  //       companyId: company2.id,
  //       jobCategory: {
  //         connect: { id: jobCategoryId }
  //       }
  //     },
  //     {
  //       jobTitle: "Graphic Designer",
  //       jobDescription: "Design visual content for marketing campaigns.",
  //       jobType: "Part-time",
  //       experience: 2,
  //       degree: "Diploma in Graphic Design",
  //       salary: "4000000",
  //       responsibilites: ["Design posters", "Social media content"],
  //       skills: ["Photoshop", "Illustrator"],
  //       companyId: company2.id,
  //       jobCategoryId: 4
  //     }
  //   ]
  // })

  // // --- Jobs untuk Marketly ---
  // await prisma.jobs.createMany({
  //   data: [
  //     {
  //       jobTitle: "Digital Marketing Specialist",
  //       jobDescription: "Develop and execute digital marketing campaigns.",
  //       jobType: "Full-time",
  //       experience: 2,
  //       degree: "Bachelor’s Degree in Marketing",
  //       salary: "7000000",
  //       responsibilites: ["SEO", "Google Ads", "Social Media"],
  //       skills: ["SEO", "Analytics", "Content Writing"],
  //       companyId: company3.id,
  //       jobCategoryId: 5
  //     },
  //     {
  //       jobTitle: "Content Writer",
  //       jobDescription: "Write engaging content for blogs and campaigns.",
  //       jobType: "Remote",
  //       experience: 1,
  //       degree: "Bachelor’s Degree in Communication",
  //       salary: "5000000",
  //       responsibilites: ["Write articles", "Research topics"],
  //       skills: ["Writing", "SEO", "WordPress"],
  //       companyId: company3.id,
  //       jobCategoryId: 6
  //     }
  //   ]
  // })

  console.log("✅ Seeding finished!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
