const mongoose = require("mongoose")

const furnitureSchema = new mongoose.Schema(
    {
        item:String,
        price:String,
        contact:String,
        email:String
    }
)

module.exports=mongoose.model("furniture",furnitureSchema)