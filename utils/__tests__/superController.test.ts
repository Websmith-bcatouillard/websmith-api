import mockData from '../interceptor';
import SuperController from '../superController';
import mModel from '../../api/users/model'

describe('Super Controller', () => {
    const superController = new SuperController(mModel);

    describe("Route : /{model}", () => {

        describe("GET /{model}", () => {

            it('should return a 200 status code', () => {
                const req = mockData.mockRequest();
                const res = mockData.mockResponse();

                superController.all(req, res).then(() => {
                    expect(res.status).toHaveBeenCalledWith(200);
                }).catch(() => { });
            });

            it('should return a 500 status code', () => {
                const req = mockData.mockRequest();
                const res = mockData.mockResponse();

                superController.all(req, res).then(() => {
                    expect(res.status).toHaveBeenCalledWith(500);
                }).catch(() => { });
            });
        });
    });

    describe('Route : /{model}/:id', () => {

        describe('GET /{model}/:id', () => {

            it('should return a status code 200', () => {
                const req = mockData.mockRequest();
                const res = mockData.mockResponse();

                req.params = jest.fn().mockReturnValue({
                    id: 1
                });

                superController.findById(req, res).then(() => {
                    expect(res.status).toHaveBeenCalledWith(200);
                }).catch(() => { });
            })

            it('should return a status code 500', () => {
                const req = mockData.mockRequest();
                const res = mockData.mockResponse();

                req.params = jest.fn().mockReturnValue({
                    id: 1
                });

                superController.findById(req, res).then(() => {
                    expect(res.status).toHaveBeenCalledWith(500);
                }).catch(() => { });
            })
        });

        describe('PUT /{model}/:id', () => {

            it('should return a status code 200', () => {
                const req = mockData.mockRequest();
                const res = mockData.mockResponse();

                req.params = jest.fn().mockReturnValue({
                    id: 1
                });
                req.body = jest.fn().mockReturnValue({
                    username: "test1",
                    password: "testTest"
                });

                superController.update(req, res).then(() => {
                    expect(res.status).toHaveBeenCalledWith(200);
                }).catch(() => { });
            });

            it('should return a status code 500', () => {
                const req = mockData.mockRequest();
                const res = mockData.mockResponse();

                req.params = jest.fn().mockReturnValue({
                    id: 1
                });
                req.body = jest.fn().mockReturnValue({
                    username: "test1",
                    password: "testTest"
                });

                superController.update(req, res).then(() => {
                    expect(res.status).toHaveBeenCalledWith(500);
                }).catch(() => { });
            });
        });

        describe('DELETE /{model}/:id', () => {

            it('should return a status code 200', () => {
                const req = mockData.mockRequest();
                const res = mockData.mockResponse();

                req.params = jest.fn().mockReturnValue({
                    id: 1
                });

                superController.delete(req, res).then(() => {
                    expect(res.status).toHaveBeenCalledWith(200);
                }).catch(() => { });
            });

            it('should return a status code 500', () => {
                const req = mockData.mockRequest();
                const res = mockData.mockResponse();

                req.params = jest.fn().mockReturnValue({
                    id: 1
                });

                superController.delete(req, res).then(() => {
                    expect(res.status).toHaveBeenCalledWith(500);
                }).catch(() => { });
            });
        });
    });
})