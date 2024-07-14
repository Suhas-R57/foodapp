import mongoose, { connect } from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://fooddel:nhce2024@cluster0.jgsiyhk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("Database connected"));

}
//'mongodb+srv://fooddel:nhce2024@cluster0.jgsiyhk.mongodb.net/food-del'
//mongodb+srv://fooddel:<password>@cluster0.jgsiyhk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0