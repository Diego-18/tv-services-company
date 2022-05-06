import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import "reflect-metadata";

const app = express();

// settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

export default app;