import express, { urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import morgan from 'morgan';
import connectToDb  from './database';
import register from './routes';

dotenv.config();

const app = express();

app.use(urlencoded({
   extended: true
}));

const whitelistedAddress = [
   'http://localhost:3000'
];

const corsOptions = {
   origin: (origin: any, callback: any) => {
      const isWhitelisted = whitelistedAddress.indexOf(origin) !== -1
      callback(null, isWhitelisted)
   },
   credentials: true
};

app.use(cors(corsOptions));
app.use(json());
app.use(morgan(':method :url :status - :response-time ms'));
app.use(urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    // eslint-disable-next-line
   console.log(`Server started on PORT: ${process.env.PORT}`);
});


connectToDb();
register(app);

export default app;