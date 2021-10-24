import express, {Request, Response} from 'express';
import {createUniversityService} from './routes';

const app = express();

app.get("/create", createUniversityService);

app.listen(3333, () => console.log("Server is running at port:3333!"));
