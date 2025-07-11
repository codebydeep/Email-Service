import express from "express"
import dotenv from "dotenv"
import emailRoute from "./routes/email.route.js"

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello Email Client")
}) 

app.use("/api/v1/email-service", emailRoute)

app.listen(PORT, () => {
    console.log(`Server is started on PORT: ${PORT}`);
})