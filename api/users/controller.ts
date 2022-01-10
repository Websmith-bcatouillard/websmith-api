import SuperController from '../../utils/superController';
import userModel from './model';
class UserController extends SuperController {

   constructor(model = userModel) {
      super(model)
   }
}

export default UserController;