import { UserModel } from "./db"

import express from "express";
import mongoose, { get } from "mongoose";
import  jwt  from "jsonwebtoken";



const app = express();
  

app.post("/api/v1/signup", (req, res)=> {

})


app.post("/api/v1/signuin", (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username,
        password,
    })
})


app.post("/api/v1/content", (req, res)=> {
    
})


app.get("/api/v1/content", (req, res)=> {
    
})

app.delete("/api/v1/content", (req, res)=> {
    
})

app.post("/api/v1/share", (req, res) => {

})

app.get("/api/v1/share", (req, res) => {

})