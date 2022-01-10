import { Application } from 'express';
import userRoutes from '../api/users/route';
import projectRoutes from '../api/projects/route';
//import { verifyMiddleware } from '../utils/authToken';

const register = (app: Application) => {
   // app.use(verifyMiddleware);
   app.use('/users', userRoutes);
   app.use('/projects', projectRoutes);
}

export default register;