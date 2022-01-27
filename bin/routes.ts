import { Application } from 'express';
import userRoutes from '../api/users/route';
import projectRoutes from '../api/projects/route';
import { verifyMiddleware } from '../utils/authToken';

const register = (app: Application) => {
   app.use('/users', userRoutes);

   // Use Middleware only for Projects Routes
   app.use(verifyMiddleware);
   app.use('/projects', projectRoutes);
}

export default register;