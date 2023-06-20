const express= require("express")
const { connection } = require("mongoose")
const { userRouter } = require("./routes/user.route")

const app=express()
app.use(express.json())

app.use("/",userRouter)

app.listen(4500,async()=>{
    try{
        await connection
        console.log("db connected")
    }
    catch(err){
        console.log(err)
    }
    console.log("server connected")
})