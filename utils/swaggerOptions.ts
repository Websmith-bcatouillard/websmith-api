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
      schemes: [
         "https",
         "http"
      ],
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
         },
         Project: {
            type: "object",
            properties: {
               name: {
                  type: "string"
               },
               startDate: {
                  type: "string",
                  format: "date"
               },
               endDate: {
                  type: "string",
                  format: "date"
               },
               clientName: {
                  type: "string"
               }
            }
         }
      },
      securityDefinitions: {
         Bearer: {
            type: "apiKey",
            name: "Authorization",
            in: "header"

         }
      }
   },
   // ['.routes/*.js']
   apis: ["./api/**/route.ts"]
};

export default swaggerOptions;
