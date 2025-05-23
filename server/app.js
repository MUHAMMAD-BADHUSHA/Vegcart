const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const adminRouter = require('./Routes/adminRouter')
const userRouter = require('./Routes/userRouter')
const authRoute = require('./Routes/authRoute')
const paymentRoute =require('./Routes/paymentRoute')

mongoose.connect(process.env.MONGODB_URL)
.then(console.log('database connected'))

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads')); 
app.use('/',userRouter)
app.use('/admin',adminRouter)
app.use('/auth',authRoute)
app.use('/payment', paymentRoute);





app.listen(process.env.PORT,()=>{
    console.log('server running port 4000')
})
