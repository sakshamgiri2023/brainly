import mongoose, { connect, model, Schema } from "mongoose";
import { JWt_password } from "./config";
mongoose.connect('mongodb+srv://sakshamgiri500:2E8reEpFvOAW0cx5@cluster0.5j2ex.mongodb.net/'); 



const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User' , required: true }
})


export const contentModel = model("content", ContentSchema);
export const userModel = model("User", UserSchema);