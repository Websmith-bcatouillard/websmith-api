import { NextFunction, Request, Response } from 'express';
import { JwtPayload, Secret, sign, SignOptions, verify, VerifyErrors } from 'jsonwebtoken';

const options: SignOptions = {
   expiresIn: '24h',
   algorithm: 'HS256',
}
const secretKey: Secret = ""+process.env.SECRET_KEY;

const verifyMiddleware = (req: Request, res: Response, next: NextFunction): void => {
   if(!req.headers.authorization){
      res.status(404).json({ success: false, message: "Authorization refused"});
      return;
   }
   const headers = req.headers.authorization.split(' ');

   const [ scheme, token ] = headers;

   if(token) {
      verify(token, secretKey, (error: VerifyErrors | null, decodedToken: JwtPayload | undefined) => {
         if(error){
            res.status(401).json({ success: false, ...error });
            return;
         }

         req.body.decodedToken = decodedToken;
         next();
      });
   } else {
      res.status(401).json({ success: false, message: 'No token provided'});
      return;
   }
};

const signToken = (payload: JwtPayload): string => {
   return sign(payload, secretKey, options);
}

export { verifyMiddleware, signToken };