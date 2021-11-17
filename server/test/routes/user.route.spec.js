const app = require('../../src/app');
var supertest = require('supertest'); //require supertest
const request = supertest(app); 
const User = require('../../src/models/user.model');
const { connect, connection } = require('mongoose');
const prodMongoURI = process.env.PROD_DATABASE_URL || '';
const devMongoURI = process.env.DEV_DATABASE_URL || '';


beforeAll(async () => {
  const mongoURI = (process.env.NODE_ENV === 'production')
  ? prodMongoURI
  : devMongoURI;
  await connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
  })
})

test("Login without user", async done =>{
    const mockUser = {username: "mock-username"};
    jest.spyOn(User, 'findOne')
    .mockImplementationOnce(() => undefined)

    const response = await request.post('/api/login').send(mockUser);
    expect(response.statusCode).toBe(401);
    done();
})

test("Login without email verification", async done =>{
    const mockUser = {username: "mock-username", status: false};
    jest.spyOn(User, 'findOne')
    .mockImplementationOnce(() => mockUser)

    const response = await request.post('/api/login').send(mockUser);
    expect(response.statusCode).toBe(422);
    done();
})

test("Login without correct password", async done =>{
    const mockUser = {username: "mock-username", status: true, salt: "mock-salt", hash: "mock-hash"};
    const mockRequest = {username: "mock-username", password: "mock-password"};
    jest.spyOn(User, 'findOne')
    .mockImplementationOnce(() => mockUser)

    const response = await request.post('/api/login').send(mockRequest);
    expect(response.statusCode).toBe(401);
    done();
})

test("Registered user again registering", async done =>{
    const mockUser = {username: "mock-username", status: true, salt: "mock-salt", hash: "mock-hash"};
    const mockRequest = {username: "mock-username"};
    jest.spyOn(User, 'findOne')
    .mockImplementationOnce(() => mockUser)

    const response = await request.post('/api/register').send(mockRequest);
    expect(response.statusCode).toBe(409);
    done();
})

test("Confirmation email without authorization", async done =>{
    const mockRequest = {userId: undefined};

    const response = await request.post('/api/confirm').send(mockRequest);
    expect(response.body.msg).toBe("You are not Authorized on this route!");
    done();
})

test("Confirmation email already verified", async done =>{
    const mockRequest = {userId: "mock-id"};
    const mockUser = {username: "mock-username", status: true};
    jest.spyOn(User, 'findOne')
    .mockImplementationOnce(() => mockUser)

    const response = await request.post('/api/confirm').send(mockRequest);
    expect(response.body.msg).toBe("Your Email is already verified");
    done();
})

afterEach(() => {
  jest.restoreAllMocks()
})

