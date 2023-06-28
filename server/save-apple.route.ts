import {Request, Response} from 'express';
import {APPLES} from "./db-data";
import {setTimeout} from 'timers';


export function saveApple(req: Request, res: Response) {

  /*
  console.log("ERROR saving apple!");
  res.sendStatus(500);
  return;

  */

    const id = req.params["id"],
        changes = req.body;

    console.log("Saving apple changes", id, JSON.stringify(changes));

    const newApple = {
      ...APPLES[id],
      ...changes
    };

    APPLES[id] = newApple;

    console.log("new apple version", newApple);

    setTimeout(() => {

        res.status(200).json(APPLES[id]);

    }, 2000);



}
