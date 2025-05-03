const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const adminRouter = require('./Routes/adminRouter')
const userRouter = require('./Routes/userRouter')
const registerRoute = require('./Routes/registerRoute')

mongoose.connect(process.env.MONGODB_URL)
.then(console.log('database connected'))

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads')); 
app.use('/',userRouter)
app.use('/admin',adminRouter)
app.use('/register',registerRoute)




app.listen(process.env.PORT,()=>{
    console.log('server running port 4000')
})
