import foodmodel from "../models/foodmodel.js";
import fs from 'fs'


//to add food item
const addFood = async(req,res)=>{
    let image_filename = `${req.file.filename}`;
    
    const food = new foodmodel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        calorie:req.body.calorie,
        category:req.body.category,
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

//food list
const listFood = async(req,res) => {
    try {
        const foods = await foodmodel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
        
    }

}

//to rmv food
const removeFood = async (req,res)=> {
    try {
        const food = await foodmodel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,() => {})
        await foodmodel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"food removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
    
}


export {addFood,listFood,removeFood}
