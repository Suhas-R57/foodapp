import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import 'dotenv/config.js'
import userRouter from "./routes/userRoute.js"


const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db conn
connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://fooddel:nhce2024@cluster0.jgsiyhk.mongodb.net/?