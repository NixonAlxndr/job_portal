import express from "express"
import userRoutes from "@/routes/user.routes.js"
import 'dotenv/config'

const app = express()
app.use(express.urlencoded())
app.use(express.json())

app.use("/user", userRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log("listen on port: ", PORT)
})