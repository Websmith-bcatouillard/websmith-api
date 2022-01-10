import express from 'express';
import dotenv from 'dotenv';
import { urlencoded, json } from 'body-parser';
import morgan from 'morgan';
import connectToDb  from './database';
import register from './routes';

dotenv.config();

const app = express();

app.use(urlencoded({
   extended: true
}));

app.use(json());
app.use(morgan(':method :url :status - :response-time ms'));
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    // eslint-disable-next-line
   console.log(`Server started on PORT: ${process.env.PORT}`);
});


connectToDb();
register(app);

export default app;