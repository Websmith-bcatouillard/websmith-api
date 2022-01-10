import { Response, Request, Router } from 'express';
import UserController from './controller';

const userController = new UserController();
const router = Router();

router.route('/')
   .get((req: Request, res: Response) => {
      userController.all(req, res);
   })
   .post((req: Request, res: Response) => {
      userController.create(req, res);
   })

router.route('/:id')
   .get((req: Request, res: Response) => {
      userController.findById(req, res);
   })
   .put((req: Request, res: Response) => {
      userController.update(req, res);
   })
   .delete((req: Request, res: Response) => {
      userController.delete(req, res);
   })

router.route('/login')
   .post((req: Request, res: Response) => {
      userController.login(req, res)
   })


export default router;
