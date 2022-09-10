const { application } = require('express')
const express=require('express')
const mongoose=require('mongoose')
const router=require('./routes/book-routes')
const cors=require('cors')
const dotenv = require('dotenv')

const app=express();
dotenv.config()
app.use(express.json())
app.use(cors())

app.use('/books',router)



mongoose.connect(process.env.MONGO_URL
).then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.json("server send")
})

app.listen(process.env.PORT || 5000,()=>{
    console.log("running")
})