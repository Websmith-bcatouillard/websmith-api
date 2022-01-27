import { Response, Request, Router } from 'express';
import ProjectController from './controller';

const projectController = new ProjectController();
const router = Router();

/**
 * @openapi
 * /projects/:
 *   get:
 *     tags:
 *       - "project"
 *     summary: Get all projects
 *     operationId: getProjects
 *     description: List all of the projects
 *     security:
 *        - Bearer: []
 *     responses:
 *       200:
 *         description: Returns a list of projects
 *       500:
 *         description: Returns an error message.
 *   post:
 *     tags:
 *       - "project"
 *     summary: Insert new project
 *     operationId: postProject
 *     description: Insert a new project
 *     parameters:    
 *     - in: "body"
 *       name: "body"
 *       description: Project object
 *       required: true
 *       schema:
 *         $ref: "#/definitions/Project"  
 *     security:
 *        - Bearer: []
 *     responses:
 *       200:
 *         description: Returns a success message
 *       403:
 *         description: Returns an error message because project is already in.
 *       500:
 *         description: Returns an error message.
 *     
 */
router.route('/')
   .get((req: Request, res: Response) => {
      projectController.all(req, res);
   })
   .post((req: Request, res: Response) => {
      projectController.create(req, res);
   })


/**
 * @openapi
 * /projects/:id:
 *    get:
 *      tags:
 *       - "project"
 *      summary: Get a project by his ID
 *      operationId: getProjectByID
 *      description: Get a project using an ID
 *      parameters:
 *        - in: query
 *          name: ID
 *          description: Project ID
 *          required: true
 *          type: string
 *      security:
 *        - Bearer: []
 *      responses:
 *        200:
 *          description: Returns a project
 *        500:
 *          description: Returns an error message.
 *    put:
 *      tags:
 *        - "project"
 *      summary: Update a project by his ID
 *      operationId: updateProjectByID
 *      description: Update a project using an ID
 *      parameters:
 *        - in: query
 *          name: ID
 *          description: Project ID
 *          required: true
 *          type: string
 *        - in: body
 *          name: body
 *          description: Project Object
 *          required: true
 *          schema: 
 *            $ref: "#/definitions/Project"
 *      security:
 *        - Bearer: []
 *      responses:
 *        200:
 *          description: Returns updated project
 *        500:
 *          description: Returns an error message.
 *    delete:
 *      tags:
 *        - "project"
 *      summary: Delete a project by his ID
 *      operationId: deleteProjectByID
 *      description: Delete a project using an ID
 *      parameters:
 *        - in: query
 *          name: ID
 *          description: Project ID
 *          required: true
 *          type: string
 *      security:
 *        - Bearer: []
 *      responses:
 *        200:
 *          description: Returns deleted project
 *        500:
 *          description: Returns an error message.
 */
router.route('/:id')
   .get((req: Request, res: Response) => {
      projectController.findById(req, res);
   })
   .put((req: Request, res: Response) => {
      projectController.update(req, res);
   })
   .delete((req: Request, res: Response) => {
      projectController.delete(req, res);
   })

export default router;