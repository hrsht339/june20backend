const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    userid:String,
    contactid:[]
})

const contactModel=mongoose.model("contact",contactSchema)

module.exports={
    contactModel
}