import mongoose, { connect } from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://<username>:<password>@cluster0.jgsiyhk.mongodb.net/food-del').then(()=>console.log("Database connected"));

}
