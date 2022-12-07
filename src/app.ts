import express, {
  Application,
  ErrorRequestHandler,
  Request,
  Response,
} from 'express';
import userRouter from './routes/userRoutes';

const app: Application = express();

app.use(express.json());

app.use(userRouter);

app.use((err: ErrorRequestHandler, req: Request, res: Response) => {
  res.status(500).send('Something went broke');
});

export default app;
