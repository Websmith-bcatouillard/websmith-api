import { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import userRoutes from '../api/users/route';
import projectRoutes from '../api/projects/route';
import { verifyMiddleware } from '../utils/authToken';
import swaggerOptions from '../utils/swaggerOptions';

const register = (app: Application) => {

   const swaggerDocs = swaggerJSDoc(swaggerOptions);
   app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

   app.use('/users', userRoutes);

   // Use Middleware only for Projects Routes
   app.use(verifyMiddleware);
   app.use('/projects', projectRoutes);
}

export default register;