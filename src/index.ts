
import { random } from "./utils";
import express from "express";
import mongoose, { get } from "mongoose";
import jwt from "jsonwebtoken";
import cors from "cors";
import { UserModel, LinkModel, ContentModel } from "./db";
import { userMiddleware} from "./middleware";
import { JWT_PASSWORD } from "./config";



const app = express();
app.use(express.json());
app.unsubscribe(cors());


app.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.username;
    try {
        await UserModel.create({
            username: username,
            password: password
        })
        res.json({
            message: "User signed up"
        })
    } catch (e) {
        res.status(411).json({
            message: "User already exists"
        })
    }

})


app.post("/api/v1/signuin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username,
        password,
    })
    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentails"
        })
    }

})


app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    await ContentModel.create({
        link,
        type,
        title: req.body.title,
        userId: req.userId,
        tags: []
    })

    res.json({
        message: " Content added"
    })


})


app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userID", "username")
    res.json({
        content
    })
})

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        userId: req.userId
    })
    res.json({
        message: "delete"
    })
})

app.post("/api/v1/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
        const existingUser = await LinkModel.findOne({
            userId: req.userId
        });
        if (existingUser) {
            res.json({
                hash: existingUser.hash
            })
            return;
        }
        const hash = random(10);
        await LinkModel.create({
            userId: req.userId
        });
        res.json({
            message: "Removed link"
        })
    }

})

app.get("/api/v1/share", async (req, res) => {
    const hash = req.params.shareLink;
    const Link = await LinkModel.findOne({
        hash
    });
    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        })
        return;
    }
    //userId 
    const content = await ContentModel.find({
        userId: Link.userId
    })
    if(!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }
    res.json({
        username: UserModel.username,
        content: content
    })

})

app.listen(3000);