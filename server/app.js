const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const adminRouter = require('./Routes/adminRouter')
const userRouter = require('./Routes/userRouter')


app.use(cors())
app.use(express.json())
app.use('/',userRouter)
app.use('/admin',adminRouter)



const port= 3333
app.listen(port,()=>{
    console.log('app listening localhost '+port)
    
})