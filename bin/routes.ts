import { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import userRoutes from '../api/users/route';
import projectRoutes from '../api/projects/route';
import { verifyMiddleware } from '../utils/authToken';

const swaggerOptions = {
   swaggerDefinition: {
      info: {
         version: "1.0.0",
         title: "Websmith API",
         description: "Websmith API Documentation",
         contact: {
            name: "Benjamin Catouillard"
         },
         servers: ["http://localhost:5000"]
      },
      tags: [
         {
            "name": "user",
            "description": "User Endpoints",
         },
         {
            "name": "project",
            "description": "Project Endpoints"
         },
      ],
      definitions: {
         User: {
            type: "object",
            properties: {
               username: {
                  type: "string",
               },
               password: {
                  type: "string",
               }
            },
         }
      },
   },
   // ['.routes/*.js']
   apis: ["./api/**/route.ts"]
};

const register = (app: Application) => {

   const swaggerDocs = swaggerJSDoc(swaggerOptions);
   app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

   app.use('/users', userRoutes);

   // Use Middleware only for Projects Routes
   app.use(verifyMiddleware);
   app.use('/projects', projectRoutes);
}

export default register;