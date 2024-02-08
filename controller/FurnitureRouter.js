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

module.exports=router