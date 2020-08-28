import { Request, Response } from "express";

export default class PingController{

    public static ping(req: Request, res: Response): void{
        res.send('pong');
    }
    
}