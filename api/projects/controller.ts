import SuperController from '../../utils/superController';
import projectModel from './model';
class ProjectController extends SuperController {

   constructor(model = projectModel) {
      super(model)
   }

   async create(req: any, res: any) {
      const { name } = req.body;

      try {
         const isProjectAlreadyIn = await projectModel.find({ name: name});

         if(isProjectAlreadyIn){
            res.status(403).json({ success: false, message: 'Project is already saved'});
            return;
         }

         super.create(req, res);
      } catch (error) {
         res.status(500).json({ success: false, message: error});
      }
   }
}

export default ProjectController;