const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { userModel } = require("../models/user.model")
const userRouter = express.Router()

userRouter.post("/signup",async(req,res)=>{
    let {name, email, password, profilepicture} = req.body
    try{
        bcrypt.hash(password,3,async(err,hashed)=>{
            let user = await new userModel({
                name, email, password:hashed, profilepicture
            })
            await user.save()
            res.send({
                "msg":"user registered",
                user
            })
        })

    }
    catch(err){
        console.log("err")
    }

})

userRouter.post("/signin",async(req,res)=>{
    let {email,password}=req.body
    try{
        let user=await userModel.findOne({email})
        if(user){
            bcrypt.compare(password,user.password,async(err,result)=>{
                if(result){
                    const token = jwt.sign({userid:user._id},"masai",{expiresIn:"3h"})
                    res.send({
                        "msg":"user signedin",
                        token
                    })
                }
                else{
                    res.send({
                        "msg":"wrong password"
                    })
                }
            })

        }
        res.send({
            "msg":"user not found"
        })
    }
    catch(err){
        console.log(err)
    }
})

module.exports={
    userRouter
}