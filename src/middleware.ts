import { NextFunction } from "express";
import Jwt, { decode } from "jsonwebtoken";
import { JWt_password } from "./config";



export const userMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    const header = req.headers.get("authorization");

    const decoded = Jwt.verify(header as string, JWt_password); 
    if (decoded){
        //@ts-ignore
        req.userId = decoded.id;
        next()
    } else {
        res.status(403).json({
            message: "you are not logged in"
        })
    }

}