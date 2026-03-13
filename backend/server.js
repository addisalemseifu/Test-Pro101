import dbConnect from "./db.js";
import express from 'express'
import cors from 'cors'

const port = 5000
dbConnect()

const app = express()
app.use(cors())

app.get('/',(req,res)=>{
    res.json({message:"CORS enabledffffffffff"});
})


app.listen(port,()=>{
    console.log('listning to port 5000')
})