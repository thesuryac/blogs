import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import userRoutes from './router/user.route.js';
import authRoutes from './router/auth.route.js';
import postRoutes from "./router/post.route.js";
import commentRoutes from './router/comment.route.js';
dotenv.config() 
import path from 'path'

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("mongodb is connected")
    })
    .catch((err)=>{
        console.log(err)
    })
const __dirname = path.resolve()


const app = express();

app.use(express.json())
app.use(cookieParser())

app.listen(3000,()=>{
    console.log(`server is running on 3000`);
})

app.use('/api/user',userRoutes)
app.use("/api/auth",authRoutes)
app.use('/api/post',postRoutes)
app.use("/api/comment",commentRoutes)

app.use(express.static(path.join(__dirname,'/client/dist')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'));
})

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
})