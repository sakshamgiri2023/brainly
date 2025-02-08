import "./types";
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { contentModel, userModel } from "./db";
import { JWt_password } from "./config"; 
import { userMiddleware } from "./middleware";

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
    // zod validation,
    const username = req.body.username;
    const password = req.body.password;

    try {
         await userModel.create({
            username: username,
            password: password
        })

        res.json({
            message: "you are signed up"
        })
    } catch(e){
        res.status(411).json({
            message: "user is already exists" 
        })
    }


});


app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await userModel.findOne({
        username,
        password
    })

    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id
        },JWt_password)
        
        res.json({
            token
        })
    }else{
        res.status(403).json({
            message: "Incorrect Credentails"
        })
    }
});

//@ts-ignore
app.post("/api/v1/content", userMiddleware, async (req , res)=> {
    const link = req.body.link;
    const type = req.body.type;
    await contentModel.create({
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags: []

    })

    return res.json({
        message: "content added"
    })
});


app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await contentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content 
    })

});


app.delete("/api/v1/content", (req, res) => {

});

app.listen(3000);  