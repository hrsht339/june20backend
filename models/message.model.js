const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    messageid:String,
    senderid:String,
    recipientid:String,
    content:String,
    timestamp:new Date(),
    attachments:[]
})

const messageModel=mongoose.model("message",messageSchema)

module.exports={
    messageModel
}