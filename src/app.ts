import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import "reflect-metadata";
// Routes import
import ServiceRouter from './routes/service.routes';


const app = express();

// settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(ServiceRouter);

export default app;