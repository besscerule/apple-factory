

import {Request, Response} from 'express';
import {APPLES} from "./db-data";



export function getAllApples(req: Request, res: Response) {

/*
    console.log("ERROR loading apples!");
    res.status(500).json({message: 'random error occurred.'});
    return;
 */

        setTimeout(() => {

             res.status(200).json({payload:Object.values(APPLES)});

        }, 1000);
}


export function getAppleById(req: Request, res: Response) {

    const appleId = req.params["id"];

    const apples:any = Object.values(APPLES);

    const apple = apples.find(apple => apple.id == appleId);

    res.status(200).json(apple);
}
