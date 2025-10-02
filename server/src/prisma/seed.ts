import prisma from "@/prisma.js"

async function main() {
  // const categories = [
  //   "Commerce",
  //   "Telecommunication",
  //   "Hotel and Tourism",
  //   "Education",
  //   "Financial Services",
  //   "Agriculture",
  //   "Metal Production",
  //   "Construction",
  //   "Transport",
  //   "Healthcare",
  //   "Information Technology",
  //   "Energy",
  //   "Media and Entertainment",
  //   "Real Estate",
  //   "Retail",
  //   "Logistics",
  //   "Food and Beverage",
  //   "Automotive",
  //   "Pharmaceuticals",
  //   "Public Sector"
  // ]

  // for (const name of categories) {
  //   await prisma.category.create({
  //     data: {
  //       name
  //     }
  //   })
  // }

  const tags = [
    "Full-time",
    "Part-time",
    "Remote",
    "Hybrid",
    "On-site",
    "Internship",
    "Contract",
    "Temporary",
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Freelance",
    "Shift Work",
    "Urgent Hiring",
    "Flexible Hours",
    "Graduate Program",
    "Visa Sponsorship",
    "High Salary",
    "Commission Based",
    "Apprenticeship"
  ]

  for (const name of tags) {
    await prisma.tag.create({
      data: { name }
    })
  }

  console.log("✅ Tag seeded successfully!")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })