
import * as express from 'express';
import {Application} from "express";
import {getAllApples, getAppleById} from "./get-apples.route";
import {saveApple} from './save-apple.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/apples').get(getAllApples);

app.route('/api/apples/:id').get(getAppleById);

app.route('/api/apples/:id').put(saveApple);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});



