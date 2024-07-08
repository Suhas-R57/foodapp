import foodmodel from "../models/foodmodel.js";
import fs from 'fs'


//to add food item
const addFood = async(req,res)=>{
    let image_filename = `${req.file.filename}`;
    const food = new foodmodel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"food added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }

}

export {addFood}
