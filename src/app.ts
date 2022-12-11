import express, {
  Application,
  NextFunction,
  Request,
  Response,
} from 'express';
import { ApplicationError } from './customError/ApplicationError';
import userRouter from './routes/userRoutes';

const app: Application = express();

app.use(express.json());

app.use(userRouter);

app.use(
  (err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
    res
      .status(err.statusCode ? err.statusCode : 500)
      .send({ message: err.message });
  }
);

export default app;
