import express from 'express';
import expertRoute from './routes/expertRoute.js';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 3001;

// middleware
app.use(express.json());


app.use('/api/experts', expertRoute);

app.listen(port, function() {
    console.log('Web server is listening on port:', port);
});