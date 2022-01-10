import { Response, Request, Router } from 'express';
import ProjectController from './controller';

const projectController = new ProjectController();
const router = Router();

router.route('/')
   .get((req: Request, res: Response) => {
      projectController.all(req, res);
   })
   .post((req: Request, res: Response) => {
      projectController.create(req, res);
   })

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