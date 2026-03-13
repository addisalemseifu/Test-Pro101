import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import userRoutes from './routes/userRoutes.js'

configDotenv()

const app = express()

// Midleware
app.use(cors())

app.use('/api/users',userRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`running on port${process.env.PORT}`)
})

