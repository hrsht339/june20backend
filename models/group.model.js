const mongoose = require("mongoose")

const groupSchema = mongoose.Schema({
    groupid:String,
    name:String,
    members:[],
    messages:String
})

const groupModel=mongoose.model("group",groupSchema)

module.exports={
    groupModel
}