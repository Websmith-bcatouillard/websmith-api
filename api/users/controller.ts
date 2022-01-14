import { hash, genSalt, compare } from 'bcrypt';
import { signToken } from '../../utils/authToken';
import { JwtPayload } from 'jsonwebtoken';

import SuperController from '../../utils/superController';
import userModel from './model';
import User from './user.interface';


class UserController extends SuperController {
   private saltRounds = Number(process.env.BCRYPT_SALTROUNDS);

   constructor(model = userModel) {
      super(model)
   }

   /**
      * Override create from SuperController because we need to hash password before inserting user in database
      * @param {Request} req - Express Request Object
      * @param {Response} res - Express Response Object
      */
   async create(req: any, res: any) {
      const { password, username } = req.body;

      try {
         const isUserAlreadyIn = await userModel.find({ username: username});

         if(isUserAlreadyIn){
            res.status(403).json({ success: false, message: 'User is already registered'});
            return;
         }


         genSalt(this.saltRounds, (errorSalt: Error | undefined, salt: string) => {
            if(errorSalt){
               res.status(501).json({ success: false, message: errorSalt.message });
               return;
            }
   
            hash(password, salt, async (errorHash: Error | undefined, hashedPassword: string) => {
               if(errorHash){
                  res.status(502).json({ success: false, message: errorHash.message });
                  return;
               }

               req.body.password = hashedPassword;
               super.create(req, res);
            });
         });
      } catch (error) {
         res.status(500).json({ success: false, message: error});
      }

   }

   /**
      * Login method which will return a json web token
      * @param {Request} req - Express Request Object
      * @param {Response} res - Express Response Object
      */
   async login(req: any, res: any){
      const { username, password } = req.body;

      try {   
         const user: User = await userModel.findOne({ username: username });
         
         if(!user){
            const errorMessage = "User not found";
            res.status(404).json({ success: false, message: errorMessage});
            return;
         }

         const isPasswordCorrect = await compare(password, user.password);

         if(!isPasswordCorrect){
            res.status(404).json({ success: false, message: "Password is incorrect"});
            return;
         }
         
         const payload: JwtPayload = {
            _id: user._id,
            username: user.username
         }

         const token = signToken(payload);

         res.status(200).json({ success: true, token: token});
      } catch (error) {
         res.status(500).json({ success: false, message: error});
      }
   }
}

export default UserController;