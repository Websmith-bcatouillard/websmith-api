import { Response, Request, Router } from 'express';
import UserController from './controller';

const userController = new UserController();
const router = Router();

router.route('/')
   .post((req: Request, res: Response) => {
      userController.create(req, res);
   })

router.route('/:id')
   .put((req: Request, res: Response) => {
      userController.update(req, res);
   })

router.route('/login')
   .post((req: Request, res: Response) => {
      userController.login(req, res)
   })


export default router;
