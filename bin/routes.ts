import { Application } from 'express';
import userRoutes from '../api/users/route';
import projectRoutes from '../api/projects/route';

const register = ( app: Application) => {
   app.use('/users', userRoutes);
   app.use('/projects', projectRoutes);
}

export default register;