const express=require("express")
const furnitureModel=require("../Models/FurnitureModel")

const router = express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let furniture=new furnitureModel(data)
    let result=await furniture.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data=await furnitureModel.find()
    res.json(data)
})

router.get("/search",async(req,res)=>{
    let input = req.body
    let data=await furnitureModel.find(input)
    res.json(data)
})

module.exports=router