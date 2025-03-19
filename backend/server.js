const express=require('express')
const app=express()
const env=require('dotenv').config()
const mongoose = require('mongoose');
const db=require('./config/db')
const loginRoutes=require('./routes/loginRoute')
const PORT=process.env.PORT||3009



app.use('/api/auth',loginRoutes)

app.listen(PORT,()=>{
    console.log("app is running in:"+PORT)
    db()
})
