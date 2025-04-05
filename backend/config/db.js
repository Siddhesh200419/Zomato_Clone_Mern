import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://siddheshgite2004:19082004@cluster0.dj11zgj.mongodb.net/food-del').then(() => console.log("DB connect"));
}