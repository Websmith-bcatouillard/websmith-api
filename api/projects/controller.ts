import SuperController from '../../utils/superController';
import projectModel from './model';
class ProjectController extends SuperController {

   constructor(model = projectModel) {
      super(model)
   }
}

export default ProjectController;