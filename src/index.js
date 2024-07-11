import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { DB_NAME } from './constants.js';

import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})
connectDB()





















// import express from 'express'
// const app = express()

// ;(async ()=>{
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error", (e)=>{
//         console.error(e)
//         throw e
//       })

//       app.listen(process.env.PORT, ()=>{
//         console.log("listening on the port")
//       })
//     } catch (error) {
//         console.error("ERROR", error)
//         throw error
//     }
// })()