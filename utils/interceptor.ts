

const mockData = {
    mockRequest: () => {
        const req = { body : jest.fn().mockReturnValue(this), params: jest.fn().mockReturnValue(this) };
        return req;
    },
    
    mockResponse: () => {
        const res = { send : jest.fn().mockReturnValue(this), status: jest.fn().mockReturnValue(this), json: jest.fn().mockReturnValue(this) };
        return res;
    }
}

export default mockData;