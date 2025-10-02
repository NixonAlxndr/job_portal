import prisma from "../src/prisma.js"

async function main() {
  const categories = [
    "Commerce",
    "Telecommunication",
    "Hotel and Tourism",
    "Education",
    "Financial Services",
    "Agriculture",
    "Metal Production",
    "Construction",
    "Transport",
    "Healthcare",
    "Information Technology",
    "Energy",
    "Media and Entertainment",
    "Real Estate",
    "Retail",
    "Logistics",
    "Food and Beverage",
    "Automotive",
    "Pharmaceuticals",
    "Public Sector"
  ]

  for (const name of categories) {
    await prisma.category.create({
      data: {
        name
      }
    })
  }

  console.log("✅ Categories seeded successfully!")
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