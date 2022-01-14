import mockData from '../../../utils/interceptor';
import ProjectController from '../controller';

describe('Controller : PROJECT', () => {
    const projectController = new ProjectController();

    describe('Route : /projects', () => {

        describe('GET /projects', () => {
            it('should return a 200 status code', () => {
                const req = mockData.mockRequest();
                const res = mockData.mockResponse();

                projectController.all(req, res).then(() => {
                    expect(res.status).toHaveBeenCalledWith(200);
                }).catch(() => {});
            });
    
            it('should return a 500 status code', () => {
                const req = mockData.mockRequest();
                const res = mockData.mockResponse();

                projectController.all(req, res).then(() => {
                    expect(res.status).toHaveBeenCalledWith(500);
                }).catch(() => {});
            });
        });

        describe('POST /projects', () => {

            it('should return a 200 status code', () => {
                const req = mockData.mockRequest();
                const res = mockData.mockResponse();
    
                req.body = jest.fn().mockReturnValue({
                    name: "Test",
                    startDate: new Date(),
                    endDate: new Date(),
                    clientName: "Test"
                });
    
                projectController.create(req, res).then(() => {
                    expect(res.status).toHaveBeenCalledWith(200);
                }).catch(() => {});
            });

            it('should return a 403 status code', () => {
                const req = mockData.mockRequest();
                const res = mockData.mockResponse();
    
                req.body = jest.fn().mockReturnValue({
                    name: "Test",
                    startDate: new Date(),
                    endDate: new Date(),
                    clientName: "Test"
                });
    
                projectController.create(req, res).then(() => {
                    expect(res.status).toHaveBeenCalledWith(403);
                }).catch(() => {});
            });

            it('should return a 500 status code', () => {
                const req = mockData.mockRequest();
                const res = mockData.mockResponse();
    
                req.body = jest.fn().mockReturnValue({
                    name: "Test",
                    startDate: new Date(),
                    endDate: new Date(),
                    clientName: "Test"
                });
    
                projectController.create(req, res).then(() => {
                    expect(res.status).toHaveBeenCalledWith(500);
                }).catch(() => {});
            });
        });
    })
});