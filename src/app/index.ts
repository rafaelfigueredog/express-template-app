import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from 'routes';
import config from 'config';
import morganMiddleware from 'middleware/morgan';


const app = express();

app.use(cors({origin: config.clientURL}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morganMiddleware);
app.use(helmet());
app.use('/', routes);

export default app;
