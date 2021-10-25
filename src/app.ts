import express from 'express';
import { universitiesRoutes } from './routes/universities.routes';

const app = express();
app.use(express.json());
app.use(universitiesRoutes);

export default app;