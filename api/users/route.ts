import { Response, Request, Router } from 'express';
import UserController from './controller';
import { verifyMiddleware } from '../../utils/authToken';

const userController = new UserController();
const router = Router();

router.route('/')
   .post((req: Request, res: Response) => {
      userController.create(req, res);
   });

router.use(verifyMiddleware);

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
   });

/**
 * @openapi
 * /users/:id:
 *   put:
 *     tags:
 *       - "user"
 *     summary: Update an user
 *     operationId: updateUser 
 *     description: Update existing user
 *     security:
 *        - Bearer: []
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
      delete req.body.decodedToken;
      userController.update(req, res);
   });

export default router;
