import mongoose, { model, Schema } from "mongoose";



mongoose.connect("mongodb+srv://saksham:IjURF1YWV1761qAX@cluster0.5j2ex.mongodb.net/");
 
const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: "String",
})

export const UserModel = model("User", UserSchema); 