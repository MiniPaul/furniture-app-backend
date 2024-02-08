const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const FurnitureRouter = require("./controller/FurnitureRouter")

const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/furniture",FurnitureRouter)

mongoose.connect("mongodb+srv://minipaul:minipaul@cluster0.isuura7.mongodb.net/furnitureDb?retryWrites=true&w=majority", 
{useNewUrlParser:true})

app.listen(3001,()=>{
    console.log("Server Running")
})
