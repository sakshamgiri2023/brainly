import mongoose, { connect, model, Schema } from "mongoose";
mongoose.connect('//teri ma ka bha'); 



const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

const ContentSchema = new Schema({
    title: String,
    link: String,
    type: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User' , required: true }
})

const LinkSchema = new Schema({
    hash: String,
    userId:{type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true},
})


export const linkModel = model("link", LinkSchema);
export const contentModel = model("content", ContentSchema);
export const userModel = model("User", UserSchema);