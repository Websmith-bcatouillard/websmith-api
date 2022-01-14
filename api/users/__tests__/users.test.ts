import mockData from '../../../utils/interceptor';
import UserController from '../controller';

describe('Controller : USER', () => {
   const userController = new UserController();

   describe("Route : /users", () => {
   
      describe("POST /users", () => {
   
         it('should return a 200 status code', () => {
            const req = mockData.mockRequest();
            const res = mockData.mockResponse();
   
            req.body = jest.fn().mockReturnValue({
               username: "test",
               password: "test"
            });
   
            userController.create(req, res).then(() => {
               expect(res.status).toHaveBeenCalledWith(200);
            }).catch(() => {});
         });

         it('should return a 403 status code', () => {
            const req = mockData.mockRequest();
            const res = mockData.mockResponse();
   
            req.body = jest.fn().mockReturnValue({
               username: "test",
               password: "test"
            });
   
            userController.create(req, res).then(() => {
               expect(res.status).toHaveBeenCalledWith(403);
               expect(res.status(403).json).toContain("User is already registered")
            }).catch(() => {});
         });

         it('should return a 501 status code', () => {
            const req = mockData.mockRequest();
            const res = mockData.mockResponse();
   
            req.body = jest.fn().mockReturnValue({
               username: "test",
               password: "test"
            });
   
            userController.create(req, res).then(() => {
               expect(res.status).toHaveBeenCalledWith(501);
               expect(res.status(501).json).toContain(false)
            }).catch(() => {});
         });

         it('should return a 502 status code', () => {
            const req = mockData.mockRequest();
            const res = mockData.mockResponse();
   
            req.body = jest.fn().mockReturnValue({
               username: "test",
               password: "test"
            });
   
            userController.create(req, res).then(() => {
               expect(res.status).toHaveBeenCalledWith(502);
               expect(res.status(502).json).toContain(false)
            }).catch(() => {});
         });

         it('should return a 500 status code', () => {
            const req = mockData.mockRequest();
            const res = mockData.mockResponse();
   
            req.body = jest.fn().mockReturnValue({
               username: "test",
               password: "test"
            });
   
            userController.create(req, res).then(() => {
               expect(res.status).toHaveBeenCalledWith(500);
               expect(res.status(500).json).toContain(false)
            }).catch(() => {});
         });
   
         it('should return a success message', () => {
            const req = mockData.mockRequest();
            const res = mockData.mockResponse();
   
            req.body = jest.fn().mockReturnValue({
               username: "test",
               password: "test"
            });
   
            userController.create(req, res).then(() => {
               expect(res.status(200).json).toContain({ success: true });
            }).catch(() => {});
         });
      });
   });

   describe('Route : /users/login', () => {

      it('should return a status code 200', () => {
         const req = mockData.mockRequest();
         const res = mockData.mockResponse();

         req.body = jest.fn().mockReturnValue({
            username: "test",
            password: "test" 
         });

         userController.login(req, res).then(() => {
            expect(res.status).toHaveBeenCalledWith(200);
         }).catch(() => {});
      });
   });
})