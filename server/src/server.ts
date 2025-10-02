import express from "express"
import morgan from "morgan"
import userRoutes from "@/routes/user.routes.js"
import companyRoutes from "@/routes/company.route.js"
import 'dotenv/config'

const app = express()
app.use(morgan('tiny'))
app.use(express.urlencoded())
app.use(express.json())

app.use("/api/user", userRoutes)
app.use("/api/company", companyRoutes)

app.get("/", (req, res) => {
    res.status(200).json({
        message: 'Success'
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log("listen on port: ", PORT)
})