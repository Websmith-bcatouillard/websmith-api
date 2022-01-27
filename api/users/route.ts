import { Response, Request, Router } from 'express';
import UserController from './controller';

const userController = new UserController();
const router = Router();

/**
 * @openapi
 * /users/:
 *   post:
 *     tags:
 *       - "user"
 *     summary: Register a new user
 *     operationId: register 
 *     description: Register new user
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: User object
 *       required: true
 *       schema:
 *         $ref: "#/definitions/User"  
 *     responses:
 *       200:
 *         description: Returns a success message.
 *       403:
 *         description: User is already registered.
 *       500:
 *         description: Returns an error message.
 *       501:
 *         description: Returns a salt password error message.
 *       502:
 *         description: Returns a hash password error message.
 */
router.route('/')
   .post((req: Request, res: Response) => {
      userController.create(req, res);
   })


/**
 * @openapi
 * /users/:id:
 *   put:
 *     tags:
 *       - "user"
 *     summary: Update an user
 *     operationId: updateUser 
 *     description: Update existing user
 *     parameters:
 *       - in: "query"
 *         name: "ID"
 *         description: User ID
 *         type: string
 *         required: true
 *       - in: "body"
 *         name: "body"
 *         description: User object
 *         required: true
 *         schema:
 *           $ref: "#/definitions/User"  
 *     responses:
 *       200:
 *         description: Returns a success message.
 *       500:
 *         description: Returns an error message.
 */
router.route('/:id')
   .put((req: Request, res: Response) => {
      userController.update(req, res);
   })


/**
 * @openapi
 * /users/login:
 *   post:
 *     tags:
 *       - "user"
 *     summary: Login 
 *     operationId: login 
 *     description: login 
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: User object
 *       required: true
 *       schema:
 *         $ref: "#/definitions/User"  
 *     responses:
 *       200:
 *         description: Returns a success message & an authorization token.
 *       404:
 *         description: User not found or password incorrect.
 *       500:
 *         description: Returns an error message.
 */
router.route('/login')
   .post((req: Request, res: Response) => {
      userController.login(req, res)
   })


export default router;
